"use client";
import React, { useEffect, useState } from "react";
import {
  ContactHeading,
  ContactParagraph,
  ContactLinks,
  FormInput,
  FormLabel,
  StatusMsg,
  SubmitBtn,
} from "./components";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xkgonzjo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ email: "", subject: "", message: "" });
      setStatusMessage("Message sent successfully!");
      setIsSuccess(true);
    } else {
      setStatusMessage("Failed to send message. Please try again.");
      setIsSuccess(false);
    }

    setTimeout(() => {
      setStatusMessage("");
    }, 2000);
  };

  const formInputs = [
    {
      name: "email",
      placeholder: "you@gmail.com",
      type: "email",
      value: formData.email,
      child: "Your email",
    },
    {
      name: "subject",
      placeholder: "Subject of your message",
      type: "text",
      value: formData.subject,
      child: "Subject",
    },
    {
      name: "message",
      placeholder: "Write your message here",
      type: "text",
      value: formData.message,
      child: "Message",
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <section
      className="relative my-12 py-24 flex flex-col md:flex-row gap-10"
      id="contact"
    >
      <div
        data-aos="fade-right"
        className="flex-1 space-y-6 flex flex-col md:items-start items-center"
      >
        <ContactHeading />

        <ContactParagraph />

        <ContactLinks />
      </div>

      <div data-aos="fade-left" className="flex-1 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {formInputs.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <FormLabel htmlfor={item.name}>{item.child}</FormLabel>

              <FormInput
                handleFunc={handleChange}
                name={item.name}
                type={item.type}
                placeholder={item.placeholder}
                value={item.value}
              />
            </div>
          ))}

          <SubmitBtn />
        </form>

        {statusMessage && (
          <StatusMsg statusMessage={statusMessage} isSuccess={isSuccess} />
        )}
      </div>
    </section>
  );
}
