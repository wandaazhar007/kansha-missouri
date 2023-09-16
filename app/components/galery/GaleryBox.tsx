'use client'
import Image from "next/image";
import './galeryComponent.scss';
import { motion } from "framer-motion";

const GaleryBox: React.FC = () => {
  return (
    <section className="galery-box">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="box-container">
          <div className="box-images">
            <Image src={'/images/galery_1.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_2.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_3.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_4.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_9.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_6.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_7.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>
          <div className="box-images">
            <Image src={'/images/galery_8.jpg'} width={100} height={100} alt="kanhsa hibachi" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default GaleryBox;