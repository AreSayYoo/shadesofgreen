"use client";

import { useState } from "react";
import Image from "next/image";
import { Carousel } from "react-bootstrap";

import Logo from "./images/Logonobg.png";
import img from "./images/img.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import messenger from "./images/Facebook_Messenger_logo.png";

const services = [
  { icon: "🌱", text: "Lawn Mowing" },
  { icon: "🌿", text: "Fertilization" },
  { icon: "🚜", text: "Weed Control" },
  { icon: "🌼", text: "Garden Maintenance" },
  { icon: "♻️", text: "Green Waste Removal" },
  { icon: "🍂", text: "Seasonal Cleanup" },
];

const carouselImages = [img3, img1, img2, img, img4];

export default function Home() {
  const [formStatus, setFormStatus] = useState({ message: "", success: null });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const { name, email, message } = form;

    setFormStatus({ message: "Sending message...", success: null });
    setIsPopupOpen(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "fea598f9-3f42-4f51-b60a-8be4283fc878",
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          message: "Message sent successfully!",
          success: true,
        });
        form.reset();
      } else {
        setFormStatus({
          message:
            "Something went wrong...Please try again. Or message us on Facebook",
          success: false,
        });
      }
    } catch (error) {
      setFormStatus({
        message:
          "We couldn't submit the form. Please try again later or message us on Facebook.",
        success: false,
      });
    }

    setIsPopupOpen(true);
  }

  return (
    <div id="top" className="app-container">
      <div className="floating-buttons">
        <a href="#top" className="floating-button">
          <span className="material-icons">home</span>
        </a>
        <a href="#services" className="floating-button">
          <span className="material-icons">build</span>
        </a>
        <a href="#about" className="floating-button">
          <span className="material-icons">info</span>
        </a>
        <a href="#contact" className="floating-button">
          <span className="material-icons">mail</span>
        </a>
        <a
          href="https://www.facebook.com/shadesofgreenkapiti/"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-button"
        >
          <span className="material-icons">facebook</span>
        </a>
      </div>

      <main>
        <div className="logo-container">
          <Image src={Logo} alt="Shades of Green Logo" className="logo-image" />
        </div>

        <section id="services" className="services-section">
          <h1 className="services-title">Our Services</h1>
          <div className="services-list">
            {services.map((service) => (
              <div key={service.text} className="service-item">
                <span className="service-icon">{service.icon}</span>
                <span className="service-text">{service.text}</span>
              </div>
            ))}
          </div>
        </section>

        <Carousel id="pictures" className="carousel">
          {carouselImages.map((imageSrc, index) => (
            <Carousel.Item key={index}>
              <Image
                className="d-block w-100 carousel-img"
                src={imageSrc}
                alt={`Lawn care ${index + 1}`}
              />
              <Carousel.Caption>
                <h3></h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        <section id="about" className="about">
          <h1>About Shades of Green</h1>
          <div className="about-section">
            <p>
              After calling the beautiful Kāpiti Coast home for over 20 years, I
              decided to turn my passion for well-kept lawns and gardens into a
              business, so I started <strong>Shades of Green – Lawns & Gardens</strong>.
            </p>
            <p>
              Fast forward three years, and I’m still out there, rain or shine,
              keeping Kāpiti’s backyards looking their best. I’m truly grateful
              for all my fantastic clients who’ve backed me along the way—it’s
              been a pleasure helping you keep your greenspaces tidy and thriving.
            </p>
            <p>
              If your lawn’s getting a bit wild or the garden needs a bit of TLC,
              give me a call at <a href="tel:0221725508">022 172 5508</a> or flick
              me an email at
              {" "}
              <a href="mailto:lane@shadesofgreen.nz">lane@shadesofgreen.nz</a>. Whether
              it’s a regular mow, a bit of garden maintenance, or a one-off tidy-up,
              I’ve got you covered.
            </p>
            <p>
              So, why spend your weekends battling the backyard when you could be
              out enjoying it? Let me take care of the hard yakka while you sit
              back and relax.
            </p>
            <p>
              <em>More to come—cheers!</em>
            </p>
            <p>
              <strong>Lane</strong>
            </p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h1>Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="hidden"
              name="access_key"
              value="fea598f9-3f42-4f51-b60a-8be4283fc878"
            />
            <input
              type="hidden"
              name="subject"
              value="New Submission from Shades of Green Website"
            />
            <input
              type="hidden"
              name="from_name"
              value="Shades of Green Kapiti"
            />
            <input
              type="hidden"
              name="ccemail"
              value="matt.p.arceo@gmail.com"
            />

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>

          {isPopupOpen && (
            <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
              <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-popup" onClick={() => setIsPopupOpen(false)}>
                  ✖
                </button>
                <p
                  className={
                    formStatus.success ? "success-message" : "error-message"
                  }
                >
                  {formStatus.message}
                </p>
              </div>
            </div>
          )}

          <div className="messenger-link">
            <a
              href="https://m.me/shadesofgreenkapiti"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={messenger}
                alt="Message us on Messenger"
                className="messenger-icon"
              />
              Message Us On Facebook
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Shades of Green. All rights reserved.</p>
      </footer>
    </div>
  );
}
