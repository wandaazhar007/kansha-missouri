'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section className="tf__about_us mt_100 xs_mt_70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft" data-wow-duration="1s">
            <motion.div
              initial={{ opacity: 1, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="about-img">
              <div className="primary-img">
                <Image width={500} height={500} src="/images/owner-kansha-hibachi.jpeg" alt="kansha hibachi express" />
              </div>
              <div className="experience">
                <h1>12</h1>
                <p>Years Experiences</p>
              </div>
              <div className="quote">
                <div className="quote-desc">
                  <p>At Kansha Hibachi Express, we're committed to serving you more than just exceptional food ...</p>
                </div>
                <div className="quote-name">
                  <p>Krisdianto</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight" data-wow-duration="1s" style={{ padding: '0 20px' }}>
            <motion.div
              initial={{ opacity: 1, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="tf__section_heading mb_25">
              <h4>About Kansha Hibachi</h4>
              <h2>Healthy Foods Provider</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, x: +200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="tf__about_us_text">
              <p>At Kansha Hibachi Express, we are passionate about bringing the authentic flavors of hibachi cuisine to your plate. Our goal is to provide you with an unforgettable dining experience, where taste, quality, and hospitality converge. We offer a streamlined dining process that ensures you can enjoy your meal without delay. Here's what sets us apart:</p>
              <ul>
                <li>
                  <h4>Premium Ingredients</h4>
                  <p>We source the freshest and highest quality ingredients to ensure that every bite is a burst of flavor, allowing you to indulge in the finest hibachi delights.</p>
                </li>
                <li>
                  <h4>Warm Hospitality</h4>
                  <p>Our team is dedicated to providing you with warm and friendly service, creating a welcoming atmosphere where you can savor your meal with joy.</p>
                </li>
                <li>
                  <h4>Customer-Centric Approach</h4>
                  <p>our satisfaction is our top priority. We value your feedback and continuously strive to improve your dining experience.</p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;