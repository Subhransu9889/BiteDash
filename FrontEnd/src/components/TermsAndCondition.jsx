import React from 'react';
import {Mail, MapPin, Phone} from "lucide-react";

const TermsAndCondition = () => {
  return <div>
      <div className="terms-div">
          <h1 className="terms-heading">Terms and Conditions</h1>
          <p className="terms-para">Last updated: July 4, 2025</p>

          <section className="terms-section">
              <h2 className="terms-section-heading">1. Acceptance of Terms</h2>
              <p>
                  By using BiteDash (referred to as "we", "our", or "us"), you agree to comply with and be legally
                  bound by these Terms. If you are using BiteDash on behalf of a business or legal entity, you
                  represent and warrant that you have the authority to bind that entity.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">2. Services Offered</h2>
              <p>
                  BiteDash is a food ordering and delivery platform that connects users with restaurants and food
                  vendors. We facilitate online ordering, payment processing, and customer support.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">3. User Accounts</h2>
              <ul className="terms-section-list">
                  <li>You must provide accurate, current, and complete information.</li>
                  <li>You are responsible for maintaining the confidentiality of your account.</li>
                  <li>You are responsible for all activities that occur under your account.</li>
              </ul>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">4. Ordering and Payment</h2>
              <ul className="terms-section-list">
                  <li>All orders are subject to acceptance and availability.</li>
                  <li>Prices include applicable taxes unless stated otherwise.</li>
                  <li>Payments are securely processed via third-party gateways.</li>
              </ul>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">5. Cancellations and Refunds</h2>
              <p>
                  Orders once confirmed may not be cancelled unless permitted by the restaurant. Refunds, if
                  applicable, will be processed according to our Refund Policy.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">6. User Conduct</h2>
              <p>You agree not to:</p>
              <ul className="terms-section-list">
                  <li>Use the service for illegal or unauthorized purposes.</li>
                  <li>Post harmful, abusive, or defamatory content.</li>
                  <li>Interfere with the service or its infrastructure.</li>
              </ul>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">7. Intellectual Property</h2>
              <p>
                  All content on BiteDash is our property or the property of our partners. You may not use, copy,
                  or distribute any content without prior written consent.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">8. Limitation of Liability</h2>
              <p>
                  BiteDash shall not be liable for indirect or consequential damages, delays, or delivery issues
                  beyond our control.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">9. Privacy Policy</h2>
              <p>
                  Your use of BiteDash is also governed by our{" "}
                  <a href="/privacy-policy" className="text-blue-600 underline">
                      Privacy Policy
                  </a>
                  .
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">10. Termination</h2>
              <p>
                  We may suspend or terminate your account at our discretion if you violate these Terms.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">11. Changes to Terms</h2>
              <p>
                  We reserve the right to modify these Terms at any time. Continued use of BiteDash after changes
                  implies acceptance of the updated Terms.
              </p>
          </section>

          <section className="terms-section">
              <h2 className="terms-section-heading">12. Contact Us</h2>
              <p>
                  If you have any questions, contact us at:
                  <br />
                  <div className='terms-us-display'>
                      <Mail size={18} />
                      <span>support@BiteDash.com</span>
                  </div>
                  <div className='terms-us-display'>
                      <Phone size={18} />
                      <span>+123 456 7890</span>
                  </div>
                  <div className='terms-us-display'>
                        <MapPin size={18} />
                        <span>123, Food Street, Bhubaneswar, India</span>
                  </div>
              </p>
          </section>
      </div>
  </div>;
};

export default TermsAndCondition;