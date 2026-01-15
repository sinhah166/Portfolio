import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error: insertError } = await supabase.from("contact_messages").insert({
      name,
      email,
      message,
    });

    if (insertError) {
      throw new Error(`Database error: ${insertError.message}`);
    }

    const resendApiKey = Deno.env.get("re_fSRnMgmU_4HngEjgRZxhvYUEtncmiComj");

    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: "sinhah166@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <div style="background: linear-gradient(to right, #3b82f6, #06b6d4); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
                  <h2 style="color: white; margin: 0;">New Portfolio Contact Submission</h2>
                </div>
                <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
                  <p style="margin: 0 0 15px 0;"><strong style="color: #1e293b;">From:</strong> ${name}</p>
                  <p style="margin: 0 0 15px 0;"><strong style="color: #1e293b;">Email:</strong> <a href="mailto:${email}" style="color: #0284c7;">${email}</a></p>
                  <p style="margin: 0;"><strong style="color: #1e293b;">Message:</strong></p>
                  <p style="color: #475569; white-space: pre-wrap; word-wrap: break-word; margin-top: 10px;">${message}</p>
                </div>
                <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="color: #64748b; font-size: 12px; margin: 0;">This email was sent from your portfolio contact form.</p>
              </div>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const emailError = await emailResponse.json();
          console.error("Resend API error:", emailError);
        }
      } catch (emailError) {
        console.error("Email sending error:", emailError);
      }
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
