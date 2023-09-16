'use client'
import Image from "next/image";
import Link from "next/link";
import './bannerHero.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const BannerHero: React.FC = () => {
  return (
    <section className="hero" style={{ backgroundImage: "url(" + "/images/banner_bg.jpg" + ")" }}>
      <div className="container">
        <div className="img-overlay">
          <span className="banner_shape_1">
            <Image src="/images/tree_5.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
          </span>
          <span className="banner_shape_2">
            <Image src="/images/tree_3.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
          </span>
          <span className="banner_shape_3">
            <Image src="/images/tree_4.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
          </span>
          <span className="banner_shape_4">
            <Image src="/images/tree_6.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
          </span>
          <span className="banner_shape_5">
            <Image src="/images/tree_7.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
          </span>
          <span className="banner_shape_6">
            <Image src="/images/tree_2.png" width={200} height={200} alt="Kansha Hibachi Express" className="img-fluid w-100" />
          </span>
        </div>
        <div className="banner-hero">

          <div className="col-left" >
            <motion.h3
              initial={{ opacity: 1, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >Unleash Your Taste Buds.</motion.h3>
            <motion.h1
              initial={{ opacity: 1, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >Indulge Kansha Hibachi Delights</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >Visit us today and experience the thrill of hibachi cuisine brought to life at Kansha Hibachi Express. We look forward to serving you and sharing the joy of our flavorful creations.

            </motion.p>
            <motion.div
              initial={{ opacity: 1, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="cta-hero">
              <Link href="tel:16604299074">
                <button className="btn-cta-hero"><i className="fas fa-phone"></i> ORDER NOW</button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 1, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="review-hero">
              <div className="stars-review">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>

              <div className="desc-review">
                <p>
                  5 Stars Ratings on <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank"><span>Google Review</span><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon" /></Link>
                </p>
              </div>
            </motion.div>


          </div>
          <div className="col-right">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="image-right">
              <Image src={'/images/slider_img.jpg'} alt="kansha hibachi express" height={100} width={100} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHero;