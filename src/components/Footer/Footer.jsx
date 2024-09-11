import React, { useState } from "react";
import footer__logo from "assets/img/bubble__inactive.svg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Footer.css"
import { collection, addDoc } from 'firebase/firestore';
import { db } from './../../firebase.js';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      try {
        await addDoc(collection(db, "emails"), { email });
  
        setMessage("Successfully subscribed!");
        setEmail("");
        toast.success("Successfully subscribed!", {
          position: "bottom-right",
        });
      } catch (error) {
        console.error("Error submitting email:", error);
        setMessage("Error submitting email");
        toast.error("Failed to subscribe. Try again later.", {
          position: "bottom-right",
        });
      }
    } else {
      toast.warn("Please enter a valid email!", {
        position: "bottom-right",
      });
    }
  };

  return (
    <div
      className="container md:mt-20 mt-36 bg-[var(--dark)] text-white px-4 py-10 sm:p-10 xl:px-14 sm:py-8 xl:py-12"
      style={{ borderTopLeftRadius: "47px", borderTopRightRadius: "47px" }}
    >
      <div className="row">
        <div className="header__logo flex items-center justify-between flex-col md:flex-row">
          <div className="logo__footer flex items-center">
            <div className="footer__logo__img">
              <img src={footer__logo} alt="Footer logo" className="w-7 h-7" />
            </div>
            <div className="footer__name pl-4 text-3xl font-semibold">
              <p>Positivus</p>
            </div>
          </div>
          <div className="footer_links mt-5 md:mt-0">
            <ul className="flex gap-6 underline-offset-8">
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#case__studies" className="hover:underline">
                  Case`s
                </a>
              </li>
              <li>
                <a href="#work__process" className="hover:underline">
                  Work Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__body text-lg flex justify-between items-center pt-16 lg:flex-row flex-col">
          <div className="footer__contact__us max-w-80 flex flex-col lg:items-start items-center">
            <div className="contact__us__title px-3 py-1 bg-[var(--green)] rounded-md w-fit text-xl text-black" >
              <p>Contact us :</p>
            </div>
            <div className="footer__data flex flex-col gap-3 mt-7">
              <div className="footer__email flex justify-center lg:justify-start">
                <div className="subtitle__email text__fz__phone">
                  <p>Email :</p>
                </div>
                <div className="text__email ml-3 text__fz__phone">
                  <p>info@positivus.com</p>
                </div>
              </div>
              <div className="footer__phone flex justify-center lg:justify-start">
                <div className="subtitle__phone text__fz__phone">
                  <p>Phone :</p>
                </div>
                <div className="text__phone ml-3 text__fz__phone">
                  <p>555-567-8901</p>
                </div>
              </div>
              <div className="footer__address flex justify-center lg:justify-start">
                <div className="subtitle__address text__fz__phone">
                  <p>Address :</p>
                </div>
                <div className="text__address ml-3 text__fz__phone" >
                  <p>str. Mihai Viteazul 99</p>
                </div>
              </div>
            </div>
          </div>
          <form
            className="footer__sub__news px-5 xl:px-10 py-8 xl:py-11 bg-[#292A32] h-full rounded-3xl flex items-center gap-3 md:gap-7 mt-10 lg:mt-0 flex-col sm:flex-row "
            onSubmit={handleSubmit}
          >
            <div className="sub__news__input">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className="w-full h-8 xl:h-12 rounded-md bg-[#292A32] placeholder:text-base md:placeholder-lg text-white p-3 placeholder:text-white italic border border-white py-6 md:py-7 xl:py-9"
              />
            </div>
            <div className="sub__news__submit">
              <button
                type="submit"
                className="bg-[var(--green)] text-black rounded-md p-3 w-full h-8 xl:h-12 text-base md:text-lg lg:text-xl py-6 md:py-7 xl:py-9 flex items-center justify-center px-12 sm:px-5 xl:px-10 "
              >
                Subscribe to news
              </button>
            </div>
          </form>
        </div>
        <div className="footer__line mt-12">
          <div
            className="vr w-full bg-white rounded-full"
            style={{ height: "1px" }}
          ></div>
        </div>
        <div className="footer__copyrights mt-12 lg:text-start text-center ">
          <p className="text-lg text__fz__phone">&copy; 2023 Positivus. All rights reserved.</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Footer;
