import { useRef, FormEventHandler, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef(null);
  const [emailSent, setEmailSent] = useState(false);
  const [buttonText, setButtonText] = useState<string>("Subscribe");

  const sendEmail: FormEventHandler<HTMLFormElement> = (e) => {
    setEmailSent(true);
    setButtonText("Sending");
    e.preventDefault();

    emailjs
      .sendForm("service_xb1stow", "template_8q5b1t3", form.current!, {
        publicKey: "TGPe1SkhbAJsp6Ec2",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setButtonText("Sent ✓");
    setEmailSent(false);
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="px-4 gap-y-2 max-sm:text-sm flex sm:flex-row flex-col sm:px-6 sm:pb-6 w-full sm:gap-x-2"
    >
      <input
        disabled={emailSent}
        name="to_email"
        required
        type="email"
        placeholder="johndoe@gmail.com"
        className="p-2 sm:flex-grow rounded bg-neutral-200 outline-none caret-purple text-black"
      />
      <div className="max-sm:mb-4 max-sm:h-9 relative w-24 sm:w-32 group bg-transparent">
        <button
          disabled={emailSent}
          type="submit"
          className="transition-all duration-500 group-hover:font-medium sm:group-hover:-translate-y-1 absolute z-10 rounded-md top-0 w-full h-full p-2 bg-neutral-800 text-neutral-300"
        >
          {buttonText}
        </button>
        <div className="z-0 opacity-0 duration-300 group-hover:opacity-100 transition h-full w-full max-sm:group-hover:translate-y-1 group-hover:translate-x-1 rounded-md bg-purple"></div>
      </div>
    </form>
  );
};
