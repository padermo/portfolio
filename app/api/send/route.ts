import { Env } from "@/lib/config/env";
import { transporter } from "@/lib/config/mail";

export async function POST(req: Request) {
  const res = await req.json();
  const { email, subject, message } = res;
  console.log(email, subject, message)
  try {
    console.log("before transporter")
    console.log(Env.emailFrom + " " + Env.password)
    await transporter.sendMail({
      from: Env.emailFrom,
      to: Env.emailFrom,
      subject: subject,
      text: `${message} \nContacto: ${email}`,
    });
    console.log("after transporter")
    return Response.json({ message: "success" });
  } catch (error) {
    console.warn(error)
    return Response.json({ message: "bad" });
  }
}
