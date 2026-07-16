"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "They showed up on time, did the work, and left. No upselling, no drama. Exactly what I needed.",
    author: "Priya M.",
    location: "Astoria",
  },
  {
    quote: "I have tried four cleaning services in Queens. CC-Kick is the only one I have rebooked.",
    author: "James T.",
    location: "Jackson Heights",
  },
  {
    quote: "My apartment has never been this clean. The bathroom alone was worth the price.",
    author: "Sofia R.",
    location: "Flushing",
  },
];

export default function SocialProof() {
  return (
    <>
      <style>{`
        .social-section {
          background-color: var(--color-canvas);
          padding-block: var(--space-huge);
          border-top: 1px solid var(--color-border-hairline);
        }

        .social-header {
          margin-bottom: var(--space-xxl);
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-xl);
        }

        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          padding: var(--space-xl);
          border: 1px solid var(--color-border-hairline);
          background-color: var(--color-surface);
        }

        .testimonial-quote {
          font-family: var(--font-body);
          font-size: var(--text-body);
          line-height: 1.65;
          color: var(--color-text-primary);
          flex: 1;
        }

        .testimonial-attribution {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .testimonial-author {
          font-family: var(--font-body);
          font-size: var(--text-metadata);
          font-weight: 400;
          color: var(--color-text-primary);
        }

        .testimonial-location {
          font-family: var(--font-body);
          font-size: var(--text-metadata);
          color: var(--color-text-secondary);
        }

        @media (max-width: 768px) {
          .social-section {
            padding-block: var(--space-xxl);
          }

          .social-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }
        }
      `}</style>
      <section className="social-section">
        <div className="container">
          <h2 className="section-header social-header">What Queens residents say.</h2>
          <div className="social-grid" role="list">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.author}
                className="testimonial-card"
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-attribution">
                  <span className="testimonial-author">{t.author}</span>
                  <span className="testimonial-location">{t.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
