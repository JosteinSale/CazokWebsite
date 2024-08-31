import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// I'm using the EmailJS-library with the free version,
// which allows me to receive 200 emails per month.

const Contact = () => {
  const [emailSent, setEmailSent] = useState<boolean>(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailSent(true);

    emailjs
      .sendForm(
        "service_s0eueki",
        "template_ysjcpdr",
        form.current as HTMLFormElement,
        {
          publicKey: "jmFRqaku-rNk2q5dI",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-me">
      <h1>Contact me</h1>
      <p>(No spam please)</p>
      {emailSent && <h1>Email sent!</h1>}
      {!emailSent && (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="from_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" />
        </form>
      )}
    </div>
  );
};

export default Contact;
