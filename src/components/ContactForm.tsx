import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [visibleFields, setVisibleFields] = useState<boolean[]>([]);

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
    const sectionElement = document.getElementById("contact-content");
    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setIsContentVisible(isVisible);
    }

    const fieldElements = document.querySelectorAll(".form-field");
    fieldElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setVisibleFields((prevState) => {
        const updatedState = [...prevState];
        updatedState[index] = isVisible;
        return updatedState;
      });
    });
  };

  useEffect(() => {
    setVisibleFields(new Array(3).fill(false)); // Inicializar para 3 campos (nombre, email, mensaje)
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-20 bg-gray-900 dark:bg-gray-900 text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          id="contact-content"
          className={`transition-opacity duration-1000 ease-out ${
            isContentVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400">
            ¡Contactame!
          </h2>
          <p className="text-center text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Si quieres contactarme, llena este formulario y te responderé
            enseguida.
          </p>
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
              className={`form-field w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-transform duration-1000 ease-out ${
                visibleFields[0]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
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
              className={`form-field w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-transform duration-1000 ease-out ${
                visibleFields[1]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
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
              className={`form-field w-full p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-transform duration-1000 ease-out ${
                visibleFields[2]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              required
            />

            <button
              type="submit"
              className="w-full p-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-md"
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
