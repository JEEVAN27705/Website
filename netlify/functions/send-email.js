// Native fetch is available in Node.js 18+ and Netlify functions
export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { name, email, message } = body;

    // Validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: "Missing required fields" }),
      };
    }

    const apiKey = (process.env.BREVO_API_KEY || "").trim();
    if (!apiKey) {
      console.error("BREVO_API_KEY missing or empty after trim");
      return {
        statusCode: 500,
        body: JSON.stringify({ success: false, error: "Email service configuration error" }),
      };
    }

    // Recipient email - defaults to the one in code but can be overridden by env var
    const toEmail = process.env.TO_EMAIL || "jeevan.patil_comp23@pccoer.in";
    // Sender email - MUST be verified in Brevo
    const senderEmail = process.env.SENDER_EMAIL || "jeevan.patil_comp23@pccoer.in";

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact Form",
          email: senderEmail,
        },
        to: [
          {
            email: toEmail,
          },
        ],
        replyTo: {
          email: email,
          name: name,
        },
        subject: `[Portfolio] New Message from ${name}`,
        htmlContent: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Message</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
              ${message.replace(/\n/g, '<br>')}
            </div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 12px; color: #888;">Sent from your portfolio website contact form.</p>
          </div>
        `,
      }),
    });

    const responseData = await response.json().catch(() => ({}));

    if (!response.ok) {
      console.error("Brevo API Error Detail:", JSON.stringify(responseData));
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          success: false, 
          error: responseData.message || "Failed to send email via Brevo",
          code: responseData.code
        }),
      };
    }


    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Function Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: "Internal server error",
        details: error.message,
      }),
    };
  }
};