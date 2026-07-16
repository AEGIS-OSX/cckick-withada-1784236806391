export default function Footer() {
  return (
    <>
      <style>{`
        .site-footer {
          background-color: var(--color-canvas);
          border-top: 1px solid var(--color-border-hairline);
          padding-block: var(--space-xl);
        }

        .footer-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-lg);
        }

        .footer-brand {
          font-family: var(--font-body);
          font-size: var(--text-metadata);
          color: var(--color-text-secondary);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 1px;
        }

        .footer-brand:focus-visible {
          outline: 2px solid var(--color-focus);
        }

        .footer-legal {
          display: flex;
          gap: var(--space-lg);
        }

        .footer-link {
          font-family: var(--font-body);
          font-size: var(--text-metadata);
          color: var(--color-text-secondary);
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 1px;
        }

        .footer-link:hover {
          color: var(--color-text-primary);
        }

        .footer-link:focus-visible {
          outline: 2px solid var(--color-focus);
        }

        @media (max-width: 768px) {
          .footer-inner {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
      <footer className="site-footer">
        <div className="container footer-inner">
          <a href="/" className="footer-brand">cc-kick</a>
          <nav className="footer-legal" aria-label="Legal links">
            <a href="/legal/privacy" className="footer-link">Privacy</a>
            <a href="/legal/terms" className="footer-link">Terms</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
