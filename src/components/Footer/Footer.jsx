import { useState } from 'react';
import axios from 'axios';
import footer__logo from 'assets/img/bubble__inactive.svg';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setNotification({ message: 'Please enter a valid email.', type: 'error' });
      return;
    }

    try {
        const response = await axios.post('http://localhost:4000/api/subscribe', { email });
        setNotification({ message: response.data.message, type: 'success' });
      setEmail('');
    } catch (error) {
      setNotification({ message: 'Failed to subscribe. Please try again.', type: 'error' });
    }
  };

  return (
    <div
      className="container mt-36 bg-[var(--dark)] text-white px-14 py-12"
      style={{ borderTopLeftRadius: '47px', borderTopRightRadius: '47px' }}
    >
      <div className="row">
        <div className="header__logo flex items-center justify-between">
          <div className="logo__footer flex items-center">
            <div className="footer__logo__img">
              <img src={footer__logo} alt="Footer logo" className="w-7 h-7" />
            </div>
            <div className="footer__name pl-4 text-3xl font-semibold">
              <p>Positivus</p>
            </div>
          </div>
          <div className="footer_links ">
            <ul className="flex gap-6 underline-offset-8">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__body text-lg flex justify-between items-center pt-16">
          <div className="footer__contact__us max-w-80">
            <div className="contact__us__title px-3 py-1 bg-[var(--green)] rounded-md w-fit text-xl text-black">
              <p>Contact us :</p>
            </div>
            <div className="footer__data flex flex-col gap-3 mt-7">
              <div className="footer__email flex">
                <div className="subtitle__email">
                  <p>Email :</p>
                </div>
                <div className="text__email ml-3">
                  <p>info@positivus.com</p>
                </div>
              </div>
              <div className="footer__phone flex">
                <div className="subtitle__phone">
                  <p>Phone :</p>
                </div>
                <div className="text__phone ml-3">
                  <p>555-567-8901</p>
                </div>
              </div>
              <div className="footer__address flex">
                <div className="subtitle__address">
                  <p>Address :</p>
                </div>
                <div className="text__address ml-3">
                  <p>str. Mihai Viteazul 99</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__sub__news px-10 py-11 bg-[#292A32] h-full rounded-3xl flex items-center gap-7">
            <form onSubmit={handleSubmit} className="w-full flex gap-7 items-center">
              <div className="sub__news__input">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 rounded-md bg-[#292A32] text-white p-3 placeholder:text-white italic border border-white"
                />
              </div>
              <div className="sub__news__submit">
                <button
                  type="submit"
                  className="bg-[var(--green)] text-black rounded-md p-3 w-full h-12 text-xl flex items-center justify-center px-10"
                >
                  Subscribe to news
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer__line mt-12">
          <div
            className="vr w-full bg-white rounded-full"
            style={{ height: '1px' }}
          ></div>
        </div>
        <div className="footer__copyrights mt-12">
          <p className="text-lg">&copy; 2023 Positivus. All rights reserved.</p>
        </div>
      </div>
      {notification.message && (
        <div
          className={`mt-4 p-3 rounded-md ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}
        >
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default Footer;
