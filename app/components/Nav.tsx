import React from 'react';

export default function Nav() {
  return (
    <>
      <style>{`
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }

        .nav-brand {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: var(--text-body);
          color: var(--color-text-primary);
          letter-spacing: -0.01em;
          text-decoration: none;
          outline: 2px solid transparent;
          outline-offset: 1px;
        }

        .nav-brand:focus-visible {
          outline: 2px solid var(--color-focus);
        }

        .site-nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--color-canvas);
          width: 100%;
        }

        .nav-cta {
          font-size: var(--text-metadata);
        }
      `}</style>
      <nav className="site-nav">
        <div className="container nav-inner">
          <a href="/" className="nav-brand">cc-kick</a>
          <a href="#waitlist" className="btn-primary nav-cta">Join the waitlist</a>
        </div>
      </nav>
    </>
  );
}
