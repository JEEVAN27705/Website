const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    const { name, email, message } = JSON.parse(event.body);

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Contact",
          email: "jeevan.patil_comp23@pccoer.in",
        },
        to: [
          {
            email: "jeevan.patil_comp23@pccoer.in",
          },
        ],
        subject: `New message from ${name}`,
        htmlContent: `
          <h3>New Contact Message</h3>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error("Brevo API failed");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};