'use client'
import './contactSection.scss';
import { faCommentAlt, faEnvelope, faHome, faMap, faPhone, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";
const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="heading">
          <h1>Contact Us</h1>
        </div>
        <div className="box-container">
          <div className="col-left">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-group">
              <FontAwesomeIcon icon={faHome} className="icons" />
              <h1 className="name">Kansha Hibachi Express</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-group">
              <FontAwesomeIcon icon={faPhone} className="icons" />
              <Link href="tel:+16604299074" rel="noreferrer"> <h1 className="phone">660-429-9074 <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" /></h1></Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-group">
              <FontAwesomeIcon icon={faEnvelope} className="icons" />
              <Link href="mailto:" rel="noreferrer"> <h1 className="email">ss.kansha@gmail.com <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" /></h1></Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-group">
              <FontAwesomeIcon icon={faMap} className="icons" />
              <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank" rel="noreferrer"> <h1 className="location">303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" /></h1> </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-group">
              <FontAwesomeIcon icon={faCommentAlt} className="icons" />
              <Link href="/faq" rel="noreferrer"> <h1 className="location">Frequently Asked Questions <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" /></h1></Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="contact-group">
              <FontAwesomeIcon icon={faCommentAlt} className="icons" />
              <Link href="https://www.google.com/maps/place/Kansha+Hibachi+Express/@38.7709022,-93.7368245,15z/data=!4m18!1m9!3m8!1s0x87c3e304e1e59d4d:0xd91636cc2fb9e159!2sKansha+Hibachi+Express!8m2!3d38.7709022!4d-93.7368245!9m1!1b1!16s%2Fg%2F11n_yrrmnf!3m7!1s0x87c3e304e1e59d4d:0xd91636cc2fb9e159!8m2!3d38.7709022!4d-93.7368245!9m1!1b1!16s%2Fg%2F11n_yrrmnf?entry=ttu" target="_blank" rel="noreferrer"> <h1 className="location">Our Reviews on Google <FontAwesomeIcon icon={faSquareArrowUpRight} className="icons-link" /></h1></Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="col-right">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12442.744552741196!2d-93.7368245!3d38.7709022!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3e304e1e59d4d%3A0xd91636cc2fb9e159!2sKansha%20Hibachi%20Express!5e0!3m2!1sen!2sus!4v1685732677839!5m2!1sen!2sus"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;