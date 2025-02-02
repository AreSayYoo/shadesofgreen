"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React, {useState} from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your message has been sent!');
      } else {
        alert('Failed to send your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
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
          </div>

          <main>

            <div className="logo-container">
                <Image src={Logo} alt="Shades of Green Logo" className="logo-image" />
            </div>
            <section id="services" className="services-section">
              
              <h2>Our Services</h2>
              <ul className="services-list">
                <li>Lawn Mowing</li>
                <li>Fertilization</li>
                <li>Weed Control</li>
                <li>Garden Maintenance</li>
                <li>Green Waste Removal</li>
                <li>Seasonal Cleanup</li>
              </ul>
            </section>
            <Carousel id="pictures" className="carousel">
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img} alt="Lawn care 1" />
                <Carousel.Caption>
                  <h3>Beautifully Manicured Lawn</h3>
                  <p>Professional care for a lush green lawn.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img1} alt="Lawn care 2" />
                <Carousel.Caption>
                  <h3>Healthy Growth</h3>
                  <p>Ensure your garden thrives year-round.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img2} alt="Lawn care 3" />
                <Carousel.Caption>
                  <h3>Seasonal Maintenance</h3>
                  <p>Keep your outdoor spaces fresh and clean.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img3} alt="Lawn care 4" />
                <Carousel.Caption>
                  <h3>Garden Perfection</h3>
                  <p>Beautiful flowerbeds and greenery.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image className="d-block w-100 carousel-img" src={img4} alt="Lawn care 5" />
                <Carousel.Caption>
                  <h3>Weed Control</h3>
                  <p>Efficient and eco-friendly solutions.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br></br>
            <br></br>

            <section id="about" className="about-section">
              <br></br>
              <h2>About Shades of Green</h2>
              <p>At Shades of Green, we are dedicated to transforming your outdoor spaces into vibrant, lush sanctuaries that not only enhance your home’s aesthetic appeal but also foster a connection with nature. Founded on a passion for horticulture and a commitment to environmental stewardship, our team of skilled professionals brings a wealth of expertise and a keen eye for detail to every project. We understand that your lawn is more than just grass; it’s a canvas where families create lasting memories, a serene retreat for relaxation, and an inviting space for gatherings. With our top-notch services, including precision mowing, meticulous edging, and tailored fertilization programs, we ensure that your lawn remains verdant and healthy all year round.
                <br></br>
                <br></br>
              What sets Shades of Green apart is our unwavering commitment to customer satisfaction and sustainable practices. We utilize eco-friendly products and techniques that protect not only your lawn but also the surrounding ecosystem. Our knowledgeable staff is always ready to share insights and personalized tips, empowering you to take part in the beautification of your landscape. Whether you’re looking for a comprehensive lawn makeover or regular maintenance to keep your yard in pristine condition, we approach every job with passion and professionalism. Join us in cultivating beauty and sustainability in your outdoor spaces, where every blade of grass tells a story of care and dedication.</p>
            </section>
            <br></br>
            <br></br>
            <section id="contact" className="contact-section">
              <h2>Contact Us</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
              </form>
              <br></br>
              <br></br>
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
