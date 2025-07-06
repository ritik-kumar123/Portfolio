import React, { useState, useLayoutEffect, useRef } from "react"; // ✅ useState added for form handling
import "./Contact.css";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  // ✅ Form state to hold user inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  // ✅ Updates form data on input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // ✅ Submit form to backend using fetch()
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload

    try {
      const res = await fetch(
        "https://portfolio-backend-pmoi.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData), // send form data
        }
      );

      const data = await res.json();
      alert(data.message); // show success or failure message
    } catch (error) {
      console.error("Email send error:", error);
      alert("Failed to send email.");
    }
  };

  // 🌀 GSAP animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".card1", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".card1",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".card2", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".card2",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="contact mb-5" id="contactpage" ref={contactRef}>
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase main-heading">
        Contact
      </h2>
      <hr />

      <div className="card card0 border-0">
        <div className="row">
          {/* 📷 Left Side Image */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card1">
              <div className="row border-line">
                <img
                  src="https://www.meshini.com/themes/meshini-v3/assets/img/icons/contact_us.png"
                  alt="Contact"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          {/* 📨 Right Side Form */}
          <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
            <div className="card2 d-flex card border-0 px-4 py-5">
              <h6 className="mb-4 text-center">
                CONTACT WITH
                <a
                  href="https://www.linkedin.com/in/ritik-kumar123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <BsLinkedin color="blue" size={30} />
                </a>
                <a
                  href="https://github.com/ritik-kumar123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <BsGithub color="blue" size={30} />
                </a>
                <a
                  href="https://www.instagram.com/ritik_thakur_73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <BsInstagram color="blue" size={30} />
                </a>
              </h6>

              {/* Divider */}
              <div className="row px-3 mb-4 align-items-center">
                <div className="col line"></div>
                <div className="col-auto">
                  <small className="or text-center">OR</small>
                </div>
                <div className="col line"></div>
              </div>

              {/* ✅ Contact Form with state + onSubmit */}
              <form onSubmit={handleSubmit} className="w-100">
                {/* Name Field */}
                <div className="row px-3 mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="row px-3 mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                {/* Message Field */}
                <div className="row px-3 mb-3">
                  <textarea
                    name="msg"
                    placeholder="Enter Message"
                    value={formData.msg}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="row px-3">
                  <button type="submit" className="btn btn-secondary">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
              {/* 🛑 End Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
