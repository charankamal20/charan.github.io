import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "./email";

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GOOGLE_APP_KEY,
  },
  secure: true,
});

const emailHtml = render(<Email url="https://charankamal20.github.io/" />);

export const sendMail = async (email: string) => {

    const options = {
      from: process.env.EMAIL,
      to: email,
      subject: "hello world",
      html: emailHtml,
    };

    await transporter.sendMail(options).then(() => {
        console.log("email sent");
    });
}

