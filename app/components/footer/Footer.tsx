'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer_overlay pt_100 xs_pt_70 pb_100 xs_pb_20" style={{ padding: '0 20px' }}>
        <div className="container wow fadeInUp" data-wow-duration="1s">
          <div className="row justify-content-between">
            <div className="col-xxl-4 col-lg-4 col-sm-9 col-md-7">
              <div className="tf__footer_content">
                <motion.a
                  initial={{ opacity: 1, x: -200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  className="footer_logo" href="/">
                  <Image width={100} height={100} src="/images/logo-kansha-header.png" alt="RegFood" className="img-fluid w-100" />
                </motion.a>
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >Our friendly and attentive staff are here to make your visit an enjoyable one, providing prompt service and answering any questions you may have.</motion.span>
                <motion.ul
                  initial={{ opacity: 1, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="social_link d-flex flex-wrap">
                  <li><a href="https://www.facebook.com/kanshahibachiexpress/" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://www.instagram.com/kansha_express/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank" rel="noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                </motion.ul>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="col-xxl-2 col-lg-2 col-sm-5 col-md-5">
              <div className="tf__footer_content">
                <h3>Short Link</h3>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/contact">Contact Us</Link></li>
                  <li><Link href="/galery">gallery</Link></li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="col-xxl-2 col-lg-2 col-sm-6 col-md-5 order-md-4">
              <div className="tf__footer_content">
                <h3>Help Link</h3>
                <ul>
                  <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link href="/refund-policy">Refund Policy</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
                </ul>
              </div>
            </motion.div>
            <div className="col-xxl-3 col-lg-4 col-sm-9 col-md-7 order-lg-4">
              <div className="tf__footer_content">
                <h3>contact us</h3>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="info">
                  <Link href="tel:+16604299074" target="_blank" rel="noreferrer">
                    <i className="fas fa-phone-alt"></i>660-429-9074
                  </Link>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="info">
                  <Link href="mailto:ss.kansha@gmail.com" target="_blank" rel="noreferrer">
                    <i className="fas fa-envelope"></i>ss.kansha@gmail.com
                  </Link>
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="info">
                  <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank" rel="noreferrer">
                    <i className="fas fa-map-marker-alt"></i> 303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States
                  </Link>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tf__footer_bottom d-flex flex-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tf__footer_bottom_text">
                {/* <p>Copyright ©<b> 2023 Kansha Hibachi Express.</b> All Rights Reserved.</p> */}
                {/* <p>&copy; 2023 Kansha Hibachi Express. All rights reserved.</p> */}
                <p>Made with ❤️ by<b> <Link href="https://wandaazhar.vercel.app/" target="_blank">Wanda Azhar</Link> </b> © 2023 in Michigan, USA 🇺🇸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;