import nodemailer from 'nodemailer'

const from = process.env.EMAIL_NODEMAILER;
const pass = process.env.PASS_NODEMAILER;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: from,
    pass: pass
  }
})

export async function POST(req: Request) {
  const res = await req.json();
  const { email, subject, message } = res;

  try {
    await transporter.sendMail({
      from: email,
      to: from,
      subject: subject,
      text: `${message} \nContacto: ${email}`
    })

    return Response.json({ message: 'success' })
  } catch (error) {
    return Response.json({ message: 'bad' })
  }
}
