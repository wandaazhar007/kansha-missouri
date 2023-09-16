'use client'
import { motion } from 'framer-motion';
import './privacyPolicy.scss';

const PrivacyPolicy: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 1 }}
      className="privacyPolicy">
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
            PRIVACY POLICY
          </motion.div>
          <div className="content">
            <p>
              Last Updated: 23 August 2023
            </p>
            <ol className="content-header">
              <li>1. Introduction</li>
              <p>Welcome to Kansha Hibachi Express ("we," "us," or "our"). This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you visit our website, use our services, or interact with us. By accessing or using our website, you consent to the practices described in this Privacy Policy.</p>

              <li>2. Information We Collect</li>
              <ol className="sub-content-header">
                <li>
                  Personal Information: When you interact with our website or make a purchase, we may collect personal information, such as your name, email address, phone number, billing and shipping address, and payment details.
                </li>
                <li>
                  Device and Usage Information: We may automatically collect certain information about your device and how you interact with our website. This includes your IP address, browser type, operating system, referring URLs, pages visited, and the duration of your visit.
                </li>
                <li>
                  Cookies and Similar Technologies: Our website may use cookies and similar technologies to enhance your browsing experience and analyze website traffic. You can manage your cookie preferences through your browser settings.
                </li>
              </ol>

              <li>3. How We Use Your Information</li>
              <ol className="sub-content-header">
                <li>
                  We use your personal information to:
                  <ul>
                    <li>Process and fulfill your orders or reservations.</li>
                    <li>Respond to your inquiries and provide customer support.</li>
                    <li>Analyze and improve our website's performance and user experience.</li>
                    <li>Prevent and detect fraud and unauthorized access.</li>
                  </ul>
                </li>
                <li>
                  We may use device and usage information to analyze website trends, monitor website usage, and improve our website's functionality.
                </li>
              </ol>

              <li>4.  How We Share Your Information</li>
              <ol className="sub-content-header">
                <li>
                  We may share your personal information with third-party service providers who assist us in operating our website, processing payments, and providing services to you.
                </li>
                <li>
                  We may share aggregated and anonymized data for analytical purposes or to improve our services. This data will not identify you personally.
                </li>
                <li>
                  We may disclose your information to comply with applicable laws, regulations, or legal processes, or to protect our rights, property, or safety, or that of others.
                </li>
              </ol>

              <li>5. Third-Party Links and Services</li>
              <p>
                Our website may contain links to third-party websites or services. This Privacy Policy does not apply to those third-party websites. We are not responsible for the privacy practices or content of such third-party sites. We encourage you to review the privacy policies of those sites.
              </p>

              <li>6. Data Security</li>
              <p>
                We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet or electronic storage method is entirely secure. Therefore, we cannot guarantee absolute data security.
              </p>

              <li>7. Your Choices</li>
              <ol className="sub-content-header">
                <li>
                  ou may opt-out of receiving promotional emails or newsletters by following the unsubscribe instructions provided in the emails.
                </li>
                <li>
                  You can manage cookies through your browser settings.
                </li>
              </ol>

              <li>8. Changes to this Privacy Policy</li>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The "Last Updated" date at the beginning of this policy will indicate when the latest changes were made. We encourage you to review this Privacy Policy periodically.
              </p>

              <li>9. Contact Us</li>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or the use of your personal information, please contact us at:
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

export default PrivacyPolicy;