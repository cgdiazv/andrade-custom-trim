import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, city, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, or message)" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { error: "RESEND_API_KEY is not configured on the server." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Andrade Custom Trim <notifications@indevasa.com>",
      to: ["andrade.customtrim@gmail.com"],
      replyTo: email,
      subject: `New Estimate Request: ${name} - ${service || "General Inquiry"}`,
      text: `New Estimate Request Received

Name: ${name}
Phone: ${phone || "Not provided"}
Email: ${email}
City/Location: ${city || "Not provided"}
Service Needed: ${service || "Not specified"}

Project Details:
${message}
`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; line-height: 1.6;">
          <div style="background-color: #111827; padding: 24px; text-align: center; border-radius: 6px 6px 0 0;">
            <h2 style="color: #ffffff; margin: 0; font-size: 20px; letter-spacing: 1px;">ANDRADE CUSTOM TRIM</h2>
            <p style="color: #FC6D15; margin: 6px 0 0 0; font-size: 13px; font-weight: bold; text-transform: uppercase;">New Estimate Request Received</p>
          </div>
          <div style="padding: 24px; background-color: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 6px 6px;">
            <h3 style="margin-top: 0; color: #111827; font-size: 16px; border-bottom: 2px solid #FC6D15; padding-bottom: 8px;">Customer Information</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 130px; color: #4b5563;">Name:</td>
                <td style="padding: 8px 0; color: #111827; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Phone:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="tel:${phone}" style="color: #FC6D15; text-decoration: none; font-weight: bold;">${phone || "Not provided"}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Email:</td>
                <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #FC6D15; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">City / Area:</td>
                <td style="padding: 8px 0; color: #111827;">${city || "Not provided"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #4b5563;">Service Needed:</td>
                <td style="padding: 8px 0; color: #111827; font-weight: 600;">${service || "Not specified"}</td>
              </tr>
            </table>

            <h3 style="margin-top: 24px; color: #111827; font-size: 16px; border-bottom: 2px solid #FC6D15; padding-bottom: 8px;">Project Details & Vision</h3>
            <div style="background-color: #f9fafb; padding: 16px; border-radius: 4px; border: 1px solid #f3f4f6; white-space: pre-wrap; font-size: 14px; color: #374151;">
${message}
            </div>

            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
              Sent via Andrade Custom Trim Website Contact Form
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error("Error processing contact form submission:", err);
    return NextResponse.json(
      { error: "Internal server error occurred while sending email." },
      { status: 500 }
    );
  }
}
