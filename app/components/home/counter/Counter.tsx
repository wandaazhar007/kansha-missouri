'use client'
import { motion } from "framer-motion";

const Counter: React.FC = () => {
  return (
    <section className="tf__counter" style={{ backgroundImage: "url(" + "/images/counter_bg.jpg" + ")", marginTop: '80px' }}>
      <div className="tf__counter_overlay pt_120 xs_pt_90 pb_100 xs_pb_0">
        <div className="container">
          <div className="row">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="col-xl-6 col-sm-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__single_counter">
                <div className="text">
                  <h2 className="counter">2.500</h2>
                  <span><i className="fas fa-users"></i></span>
                </div>
                <p>customer serve</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="col-xl-6 col-sm-6 col-lg-6 wow fadeInUp" data-wow-duration="1s">
              <div className="tf__single_counter">
                <div className="text">
                  <h2 className="chef">5</h2>
                  <span><i className="fas fa-chess-rook"></i></span>
                </div>
                <p>experience chef</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Counter;