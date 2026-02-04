import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
    
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validation
  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.contact.trim()) {
      errors.contact = "Phone or Email is required";
    } else if (
      !/^\S+@\S+\.\S+$/.test(formData.contact) &&
      !/^\d{10}$/.test(formData.contact)
    ) {
      errors.contact = "Enter valid email or 10-digit phone number";
    }

    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Yup!!! Message sent successfully");
      setFormData({ name: "", contact: "", subject: "", message: "" });
      setErrors({});
    }
  };

  return (
    <>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <h1>Let's Connect & Collaborate</h1>
        <p>
          Whether it's a new project, a collaboration, or just to say hi — I'd
          love to hear from you!
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input
            type="text"
            name="contact"
            placeholder="Your Email or Phone"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact && <span className="error">{errors.contact}</span>}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}

          <textarea
            name="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
