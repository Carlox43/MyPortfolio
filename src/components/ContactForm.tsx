import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        "service_it0ca0o",
        "template_d06fure",
        templateParams,
        "XgRHYjTOuTtuhCAl0"
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message.");
    }
  };

  const handleScroll = () => {
    const element = document.getElementById("contact-content");
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setIsContentVisible(rect.top >= 0 && rect.bottom <= window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          id="contact-content"
          className={`transition-opacity duration-1000 ${
            isContentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
          <form
            role="form"
            aria-labelledby="contact-form"
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6"
          >
            <h2 id="contact-form" className="sr-only">
              Contact Form
            </h2>

            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              id="name"
              placeholder="Your Name"
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
              required
            />

            <label htmlFor="email" className="sr-only">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email"
              placeholder="Your Email"
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
              required
            />

            <label htmlFor="message" className="sr-only">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              id="message"
              placeholder="Your Message"
              className="w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm"
              required
            />

            <button
              type="submit"
              className="w-full p-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded-md"
            >
              Send Message
            </button>
            {status && <p className="text-center text-lg mt-4">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
