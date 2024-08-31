import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// I'm using the EmailJS-library with the free version,
// which allows me to receive 200 emails per month.

const ContactWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 40px;
  border-radius: 10px;

  h1 {
    text-align: center;
    color: #c4c4c4;
    margin-bottom: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    gap: 15px;
  }

  form label {
    color: #ff77ff;
    font-size: 25px;
    margin-bottom: 5px;
  }

  form input[type="text"],
  form input[type="email"],
  form textarea {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: #ffffff;
    transition: border-color 0.3s ease;
  }

  form input[type="text"]:focus,
  form input[type="email"]:focus,
  form textarea:focus {
    border-color: #ff00b7;
    outline: none;
  }

  form textarea {
    height: 150px;
    resize: vertical;
  }

  form input[type="submit"] {
    width: 100%;
    padding: 12px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  form input[type="submit"]:hover {
    background-color: #0056b3;
  }

  h1 + h1 {
    text-align: center;
    color: green;
    margin-top: 20px;
    animation: fade-in 0.5s ease-in-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

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
    <ContactWrapper>
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
    </ContactWrapper>
  );
};

export default Contact;
