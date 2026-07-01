import nodemailer from "nodemailer"
import { Env } from "./env";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Env.emailFrom,
    pass: Env.password,
  },
});
