'use client'
import { motion } from 'framer-motion';
import './refundPolicy.scss';

const RefundPolicy: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 1 }}
      className="refundPolicy">
      <div className="container">
        <div className="box-container">
          <motion.div
            initial={{ opacity: 1, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="header">
            Kansha Hibachi Express
          </motion.div>
          <motion.div
            initial={{ opacity: 1, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="sub-header">
            REFUND POLICY
          </motion.div>
          <div className="content">
            <p>
              Last Updated: June 07 2023
            </p>
            <ol className="content-header">
              <li>1. Refund Policy Overview</li>
              <p>At Kansha Hibachi Express, we strive to provide our customers with the best possible dining experience and customer service. This Refund Policy outlines our procedures for refunds and cancellations for purchases made on our website or in-person at our restaurant. By making a purchase with us, you agree to the terms and conditions outlined in this policy.</p>

              <li>2. Order Cancellation and Refunds</li>
              <ol className="sub-content-header">
                <li>
                  <b>Online Orders:</b> If you wish to cancel an online order, please contact us at <b>660-429-9074</b> as soon as possible. Orders that have not been processed or prepared for delivery may be eligible for cancellation and a full refund.
                </li>
                <li>
                  <b>In-Person Orders</b>: For orders placed at our restaurant, please speak to a member of our staff immediately if you wish to cancel or modify your order. We will do our best to accommodate your request, subject to the order's preparation status.
                </li>
              </ol>

              <li>3. Refunds for Cancelled Orders</li>
              <ol className="sub-content-header">
                <li>
                  <b>Online Orders:</b> If your online order is eligible for cancellation and a refund, the refund will be issued to the original payment method used for the purchase. Please allow [Processing Time] for the refund to be processed and reflected in your account.
                </li>
                <li>
                  <b>In-Person Orders:</b> For in-person orders, refunds will be issued using the original payment method. If you paid by credit card, the refund will be credited back to the same card used for the purchase. Cash refunds may be provided for cash payments made in-store.
                </li>
              </ol>

              <li>4. Refunds for Unsatisfactory Food or Service</li>
              <ol className="sub-content-header">
                <li>
                  <b>Quality Concerns:</b> If you encounter any quality issues with the food you ordered, please notify us immediately upon receiving your order. We will assess the situation and, if necessary, provide an appropriate solution, which may include a replacement or refund.
                </li>
                <li>
                  <b>Service Concerns:</b> If you experience unsatisfactory service during your visit to our restaurant, please bring it to the attention of our staff or management. We will address your concerns and work to improve your experience.
                </li>
              </ol>


              <li>5. Contact Us</li>
              <p>
                If you have any questions, concerns, or requests regarding this Refund Policy or the refund process, please contact us at:
              </p>
              <div className='contactUs'>
                <table>
                  <tbody>
                    <tr>
                      <td>Phone Number:</td>
                      <td>660-429-9074</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td>ss.kansha@gmail.com</td>
                    </tr>
                    <tr>
                      <td>Address:</td>
                      <td>303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default RefundPolicy;