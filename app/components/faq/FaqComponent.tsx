'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './faqComponent.scss';
import Link from 'next/link';
import { faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const FaqComponent = () => {
  return (
    <section className="faq faq-page">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, y: -100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            <h1>Frequently Asked Questions</h1>
            <p>Let&apos;s answer some of your questions.</p>
          </motion.div>
          <ul className="accordion">
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="first" />
              <label htmlFor="first">What are your operating hours?</label>
              <div className="content">
                <p>
                  Our operating hours are (<b>Monday to Saturday 11:00AM - 2:30PM, and 04:00PM - 09:00PM</b>). (<b>Sunday 04:00PM - 09:00PM</b>). We're open 7 days of the week for lunch and dinner, so you can satisfy your hibachi cravings at your convenience.
                </p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="second" />
              <label htmlFor="second">Do you offer delivery?</label>
              <div className="content">
                <p>Unfortunately, We don't offer delivery.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="thrid" />
              <label htmlFor="thrid">Is the food cooked in front of the guests?</label>
              <div className="content">
                <p>Unfortunately, We don't cook in front of guests</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="four" />
              <label htmlFor="four">Are vegetarian options available?</label>
              <div className="content">
                <p>Yes, we have vegetarian options available, including a variety of fresh vegetables and tofu. our chefs will do their best to accommodate you.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="five" />
              <label htmlFor="five">Can I customize my meal?</label>
              <div className="content">
                <p>Absolutely! At Kansha Hibachi Express, we offer a wide selection of fresh ingredients, including proteins, vegetables, and sauces. You can customize your meal by choosing your preferred combination of ingredients to create a delicious and personalized hibachi dish.</p>
              </div>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <input type="radio" name='accordion' id="six" />
              <label htmlFor="six">What is hibachi cooking?</label>
              <div className="content">
                <p>Hibachi cooking is a traditional Japanese grilling technique where skilled chefs cook a variety of meats, seafood, and vegetables on a flat iron grill.</p>
              </div>
            </motion.li>
          </ul>
          <div className="all-faq">
            <Link href="/faq">
              <p>See All Faq's <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /></p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqComponent;