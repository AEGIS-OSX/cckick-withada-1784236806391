"use client";
import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <>
      <style>{`
        .pricing-section {
          background-color: var(--color-surface);
          padding-block: var(--space-huge);
        }

        .pricing-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-xxl);
          align-items: start;
        }

        .pricing-body {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-text-primary);
          max-width: 38ch;
          margin-top: var(--space-lg);
        }

        .pricing-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding-block: var(--space-lg);
          border-bottom: 1px solid var(--color-border-hairline);
        }

        .pricing-row:first-child {
          border-top: 1px solid var(--color-border-hairline);
        }

        .pricing-amount {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 500;
          letter-spacing: -0.02em;
          color: var(--color-text-primary);
        }

        .pricing-footnote {
          margin-top: var(--space-xl);
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding-block: var(--space-xxl);
          }

          .pricing-inner {
            grid-template-columns: 1fr;
            gap: var(--space-xl);
          }
        }
      `}</style>
      <motion.section
        id="pricing"
        className="pricing-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container">
          <div className="pricing-inner">
            <div className="pricing-header">
              <h2 className="section-header">Transparent pricing.</h2>
              <p className="pricing-body">We do not hide the number. One flat rate based on your space.</p>
            </div>
            <div>
              <div className="pricing-table">
                <div className="pricing-row">
                  <span>Studio / 1 Bedroom</span>
                  <span className="pricing-amount">$160</span>
                </div>
                <div className="pricing-row">
                  <span>2 Bedroom</span>
                  <span className="pricing-amount">$210</span>
                </div>
                <div className="pricing-row">
                  <span>3 Bedroom</span>
                  <span className="pricing-amount">$260</span>
                </div>
              </div>
              <p className="pricing-footnote metadata-text">All cleanings include kitchen, bathrooms, and common areas. No hidden fees.</p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
