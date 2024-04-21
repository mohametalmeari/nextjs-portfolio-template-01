import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const formEmail = process.env.FORM_EMAIL;

export async function POST(req, res) {
  try {
    const body = await req.json();
    const { email, subject, message } = body;
    const data = await resend.emails.send({
      from: `Mohamad <onboarding@resend.dev>`,
      to: ["mohamet.almeari@gmail.com", email],
      subject: "Message from portfolio",
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
