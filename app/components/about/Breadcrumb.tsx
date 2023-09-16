'use client'
import Link from "next/link";
import { motion } from "framer-motion";

const BreadcrumbAbout: React.FC = () => {

  return (
    <>
      <section className="tf__breadcrumb" style={{ backgroundImage: "url(" + "/images/breadcrumb_bg.jpg" + ")" }}>
        <div className="tf__breadcrumb_overlay">
          <div className="container">
            <div className="tf__breadcrumb_text">
              <motion.h1
                initial={{ opacity: 1, x: -200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >about us</motion.h1>
              <motion.ul
                initial={{ opacity: 1, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <li><Link href="/">home</Link></li>
                <li><Link href="/about">about us</Link></li>
              </motion.ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadcrumbAbout;