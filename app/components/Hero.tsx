"use client";
import { motion } from "framer-motion";

const heroVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          background-color: var(--color-canvas);
          padding-block-start: var(--space-huge);
          padding-block-end: 179px;
        }

        .hero-content {
          max-width: 65%;
        }

        .hero-eyebrow {
          display: block;
          margin-bottom: var(--space-lg);
        }

        .hero-headline {
          margin-bottom: var(--space-xl);
        }

        .hero-subheadline {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-text-primary);
          max-width: 52ch;
          margin-bottom: var(--space-xxl);
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: var(--space-xl);
        }

        .hero-secondary-cta {
          font-family: var(--font-body);
          font-size: var(--text-metadata);
          color: var(--color-text-secondary);
          text-decoration: underline;
          text-underline-offset: 2px;
          white-space: nowrap;
          outline: 2px solid transparent;
          outline-offset: 1px;
        }

        .hero-secondary-cta:hover {
          color: var(--color-text-primary);
        }

        .hero-secondary-cta:focus-visible {
          outline: 2px solid var(--color-focus);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-block-start: var(--space-xxl);
            padding-block-end: 96px;
          }

          .hero-content {
            max-width: 100%;
          }
        }

        @media (max-width: 375px) {
          .hero-section {
            padding-block-start: var(--space-xl);
            padding-block-end: 64px;
          }
        }
      `}</style>
      <motion.section
        variants={heroVariants}
        initial="hidden"
        animate="visible"
        className="hero-section"
      >
        <div className="container">
          <div className="hero-content">
            <motion.p variants={itemVariants} className="hero-eyebrow metadata-text">
              Queens, NY
            </motion.p>
            <motion.h1 variants={itemVariants} className="display-headline hero-headline">
              Your apartment, cleaned.
            </motion.h1>
            <motion.p variants={itemVariants} className="hero-subheadline">
              Professional residential cleaning for Queens. No domestic theater. Just precise, quiet competence.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-actions">
              <a href="#waitlist" className="btn-primary">Join the waitlist</a>
              <a href="#pricing" className="hero-secondary-cta">View pricing</a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
