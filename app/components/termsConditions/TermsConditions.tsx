'use client'
import { motion } from 'framer-motion';
import './termsConditions.scss';

const TermsConditions: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 1 }}
      className="termsConditions">
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
            TERMS & CONDITIONS
          </motion.div>
          <div className="content">
            <p>
              Welcome to Kansha Hibachi Express! These Terms and Conditions govern your access to and use of the website, services, and content provided by Kansha Hibachi Express ("we," "us," or "our"). By accessing or using our website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
            </p>
            <ol className="content-header">
              <li>1. Acceptance of Terms</li>
              <p>By using this website, you represent that you are at least 18 years old or have the consent of a parent or legal guardian. If you are accessing and using this website on behalf of a company or organization, you represent that you have the authority to bind that entity to these Terms and Conditions.</p>

              <li>2. Use of the Website</li>
              <ol className="sub-content-header">
                <li>
                  You may use this website for your personal, non-commercial use and in compliance with these Terms and Conditions.
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of your account and password and agree to accept responsibility for all activities that occur under your account.
                </li>
                <li>
                  You agree not to use this website for any unlawful or prohibited purpose, including but not limited to:
                  <ul>
                    <li>Violating any applicable laws or regulations.</li>
                    <li>Infringing on the intellectual property rights of others</li>
                    <li>Engaging in fraudulent, deceptive, or harmful activities.</li>
                    <li>Interfering with or disrupting the operation of the website.</li>
                  </ul>
                </li>
                <li>
                  We reserve the right to modify, suspend, or discontinue any part of the website without notice or liability.
                </li>
              </ol>

              <li>3. Intellectual Property</li>
              <ol className="sub-content-header">
                <li>
                  All content, logos, trademarks, images, and materials on this website are the property of Kansha Hibachi Express and protected by intellectual property laws. You may not use, reproduce, or distribute any content from this website without prior written permission.
                </li>
                <li>
                  User-generated content, such as reviews, comments, and submissions, may be used by Kansha Hibachi Express for promotional purposes without attribution or compensation.
                </li>
              </ol>

              <li>4. User Conduct</li>
              <ol className="sub-content-header">
                <li>
                  ou agree not to post, transmit, or submit any content that is offensive, defamatory, obscene, or violates the rights of others.
                </li>
                <li>
                  You may not engage in any conduct that could harm, disrupt, or impair the functionality of the website or interfere with other users' access to and use of the website.
                </li>
                <li>
                  ou shall not use any automated means, such as bots or crawlers, to access or collect information from the website without our prior written consent
                </li>
              </ol>

              <li>5. Privacy Policy</li>
              <p>
                Your use of this website is subject to our Privacy Policy, which governs the collection, use, and disclosure of personal information provided by you. By using this website, you consent to the practices described in our Privacy Policy.
              </p>

              <li>6. Ordering and Purchasing</li>
              <ul className="sub-content-header">
                <li>
                  If you make a purchase or order through this website, you agree to provide accurate and complete information for the transaction.
                </li>
                <li>
                  Kansha Hibachi Express reserves the right to refuse or cancel any order placed through the website for any reason, including but not limited to product availability, pricing errors, or suspected fraudulent activity.
                </li>
                <li>
                  Prices and availability of products are subject to change without notice.
                </li>
              </ul>

              <li>7. Disclaimer of Warranties</li>
              <ol className="sub-content-header">
                <li>
                  The content on this website is provided for informational purposes only. We do not warrant the accuracy, completeness, or usefulness of the information
                </li>
                <li>
                  Kansha Hibachi Express disclaims all warranties, express or implied, including but not limited to merchantability and fitness for a particular purpose.
                </li>
                <li>
                  We do not guarantee that the website will be error-free, uninterrupted, or free of viruses or other harmful components.
                </li>
              </ol>

              <li>8.  Limitation of Liability</li>
              <ol className="sub-content-header">
                <li>
                  Kansha Hibachi Express shall not be liable for any direct, indirect, incidental, consequential, or exemplary damages arising from your use of this website.
                </li>
                <li>
                  You agree to defend, indemnify, and hold harmless Kansha Hibachi Express and its affiliates from any claims, liabilities, or expenses arising from your use of the website.
                </li>
              </ol>

              <li>9. Links to Third-Party Websites</li>
              <ol className="sub-content-header">
                <li>
                  Our website may contain links to third-party websites. We are not responsible for the content, privacy policies, or practices of these websites.
                </li>
                <li>
                  The inclusion of any link does not imply our endorsement or affiliation with the linked site.
                </li>
              </ol>

              <li>10. Changes to Terms and Conditions</li>
              <ol className="sub-content-header">
                <li>
                  Kansha Hibachi Express may update these Terms and Conditions at any time without notice. Please review this page periodically to stay informed of any changes.
                </li>
                <li>
                  Your continued use of the website after any modifications to the Terms and Conditions constitutes acceptance of those changes.
                </li>
              </ol>

              <li>11. Governing Law and Jurisdiction</li>
              <ol className="sub-content-header">
                <li>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws.
                </li>
                <li>
                  Any disputes arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts.
                </li>
              </ol>
            </ol>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default TermsConditions;