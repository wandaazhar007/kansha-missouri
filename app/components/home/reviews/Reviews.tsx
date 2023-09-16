'use client'
import './reviews.scss';
import { faSquareArrowUpRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <section className="review">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            <p>What people say about Kansha Hibachi Express</p>
            <h1>Rated 5/5 on <FontAwesomeIcon icon={faStar} className="icon" /> <span>Google</span></h1>
          </motion.div>
          <div className="content">
            <div className="col-left">
              <motion.div
                initial={{ opacity: 1, scale: 1, x: -300 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="box heading">
                <h1>Stories from our customers</h1>
                <p className="desc">Get inspired by these stories</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="box">
                <p className="review-content">Very good food and the owner is very nice. My only complaint is the last time we ordered my husband got the shrimp only and there were only 4 shrimp in the whole meal. That’s something I would expect if you got maybe steak or chicken with the shrimp not just shrimp by itself. Thankfully the rice filled him up but it was way too expensive for only veggies, rice and 4 shrimp.</p>
                <p className="name">Donna Johnson-Kuhn</p>
              </motion.div>
            </div>
            <div className="col-right">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="box">
                <p className="review-content">Place was amazing, food was great the staff was so friendly best hibachi and sushi in burg by far</p>
                <p className="name">George Sterling</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="box">
                <p className="review-content">Delicious, delicious wholesome food!! Not greasy. The noodles are really good. We'll definitely be going back! Love the community the owner has, my 5 year old son loves coming to say hi! Vegetarian options: They have a vegetarian hibachi, and I just like getting a side of noodles and side of veggies Kid-friendliness: Outside environment, easy to have kids at the table</p>
                <p className="name">Kristin Quick</p>
              </motion.div>
            </div>
          </div>
          <div className="footer-review">
            <p>See our 100+ reviews on <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank">Google <FontAwesomeIcon icon={faSquareArrowUpRight} className="icon" /></Link></p>
          </div>
        </div>
      </div >
    </section >
  );
}

export default Reviews;