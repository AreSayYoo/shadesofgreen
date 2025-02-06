"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import img from './images/img.jpg';
import img1 from './images/img1.jpg';
import img2 from './images/img2.jpg';
import img3 from './images/img3.jpg';
import img4 from './images/img4.jpg';
import Logo from './images/Logonobg.png';
import messenger from './images/Facebook_Messenger_logo.png';
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [formStatus, setFormStatus] = useState({ message: "", success: null });
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus({ message: "Sending message...", success: null });
    setIsPopupOpen(true); // Show popup while sending

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            access_key: "fea598f9-3f42-4f51-b60a-8be4283fc878",
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
        }),
    });
    const result = await response.json();
    if (result.success) {
      setFormStatus({ message: "Message sent successfully!", success: true });
      e.target.reset();
    } else {
      setFormStatus({ message: "Something went wrong...Please try again. Or message us on Facebook", success: false });
    }

    setIsPopupOpen(true); // Ensure popup shows message
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="app-container">

          <div className="floating-buttons">
            <a href="#top" className="floating-button">
            <span class="material-icons">home</span>
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
            <a href="https://www.facebook.com/shadesofgreenkapiti/" target="_blank" rel="noopener noreferrer" className="floating-button">
              <span className="material-icons">facebook</span>
            </a>
          </div>

          <main>

            <div className="logo-container">
                <Image src={Logo} alt="Shades of Green Logo" className="logo-image" />
            </div>
            <section id="services" className="services-section">
              <h2 className="services-title">Our Services</h2>
              <div className="services-list">
                {[
                  { icon: "🌱", text: "Lawn Mowing" },
                  { icon: "🌿", text: "Fertilization" },
                  { icon: "🚜", text: "Weed Control" },
                  { icon: "🌼", text: "Garden Maintenance" },
                  { icon: "♻️", text: "Green Waste Removal" },
                  { icon: "🍂", text: "Seasonal Cleanup" },
                ].map((service, index) => (
                  <div key={index} className="service-item">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-text">{service.text}</span>
                  </div>
                ))}
              </div>
            </section>
            <Carousel id="pictures" className="carousel">
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img3} alt="Lawn care 1" />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img1} alt="Lawn care 2" />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img2} alt="Lawn care 3" />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img} alt="Lawn care 4" />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img4} alt="Lawn care 5" />
                <Carousel.Caption>
                  <h3></h3>
                  <p></p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br></br>

            <section id="about" className="about">
              <h2>About Shades of Green</h2>
              <div className="about-section">
                <p>
                  After calling the beautiful Kāpiti Coast home for over 20 years, I decided to turn my passion for well-kept lawns and gardens into a business—so I started <strong>Shades of Green – Lawns & Gardens</strong>.
                </p>
                
                <p>
                  Fast forward three years, and I’m still out there, rain or shine, keeping Kāpiti’s backyards looking their best. I’m truly grateful for all my fantastic clients who’ve backed me along the way—it’s been a pleasure helping you keep your greenspaces tidy and thriving.
                </p>
                
                <p>
                  If your lawn’s getting a bit wild or the garden needs a bit of TLC, give me a call at <a href="tel:0221725508">022 172 5508</a> or flick me an email at <a href="mailto:lane@shadesofgreen.nz">lane@shadesofgreen.nz</a>. Whether it’s a regular mow, a bit of garden maintenance, or a one-off tidy-up, I’ve got you covered.
                </p>
                
                <p>
                  So, why spend your weekends battling the backyard when you could be out enjoying it? Let me take care of the hard yakka while you sit back and relax.
                </p>

                <p><em>More to come—cheers!</em></p>

                <p><strong>Lane</strong></p>
              </div>
            </section>
           
            <section id="contact" className="contact-section">
              <h2>Contact Us</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="fea598f9-3f42-4f51-b60a-8be4283fc878"/>
                <input type="hidden" name="subject" value="New Submission from Shades of Green Website"/>
                <input type="hidden" name="from_name" value="Shades of Green Kapiti"/>
                <input type="hidden" name="ccemail" value="matt.p.arceo@gmail.com"/>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
              </form>
              {/* Success/Error Message Display */}
              {isPopupOpen && (
                <div className="popup-overlay" onClick={() => setIsPopupOpen(false)}>
                  <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                    <button className="close-popup" onClick={() => setIsPopupOpen(false)}>✖</button>
                    <p className={formStatus.success ? "success-message" : "error-message"}>
                      {formStatus.message}
                    </p>
                  </div>
                </div>
              )}
             
              <div class="messenger-link">
                <a href="https://m.me/shadesofgreenkapiti" target="_blank" rel="noopener noreferrer">
                  <Image src={messenger} alt="Message us on Messenger" className="messenger-icon"/>
                Message Us On Facebook
                </a>
              </div>
            </section>
          </main>

          <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Shades of Green. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
