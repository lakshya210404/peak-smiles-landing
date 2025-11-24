import React from "react";
import "./App.css";

function App() {
  return (
    <div className="ps-page">
      {/* HEADER */}
      <header className="ps-header">
        <div className="ps-logo">
          <span className="ps-logo-mark">A</span>
          <span className="ps-logo-text">peaksmiles</span>
        </div>

        <nav className="ps-nav">
          <a href="#how" className="ps-nav-link">
            How Invisalign Works
          </a>
          <a href="#why" className="ps-nav-link">
            Why Peak Smiles
          </a>
          <a href="#contact" className="ps-nav-link ps-nav-btn">
            Book Consultation
          </a>
        </nav>
      </header>

      {/* HERO STRIP */}
      <section className="ps-hero">
        <div className="ps-hero-left">
          <p className="ps-label">Invisalign® at Peak Smiles</p>

          <h1 className="ps-hero-title">
            Clear Invisalign care
            <br />
            for every smile.
          </h1>

          <p className="ps-hero-subtitle">
            Clear aligners, short visits, and a team that guides you from first
            scan to final smile.
          </p>

          <div className="ps-hero-actions">
            <button
              className="ps-cta-primary"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Book a free consultation
            </button>
            <button
              className="ps-cta-secondary"
              onClick={() => {
                const el = document.getElementById("how");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              See how it works
            </button>
          </div>

          <div className="ps-hero-stats">
            <div className="ps-stat">
              <span className="ps-stat-number">Diamond</span>
              <span className="ps-stat-label">Invisalign Provider</span>
            </div>
            <div className="ps-stat">
              <span className="ps-stat-number">1000+</span>
              <span className="ps-stat-label">Smiles treated</span>
            </div>
            <div className="ps-stat">
              <span className="ps-stat-number">4.9★</span>
              <span className="ps-stat-label">Patient rating</span>
            </div>
          </div>
        </div>

        <div className="ps-hero-right">
          <div className="ps-photo-card">
            <img
              src="/patient-smile.png"
              alt="Invisalign patient smiling"
              className="ps-photo-img"
            />
            <div className="ps-photo-tag">
              Invisalign-style smile (photo for illustration)
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS – COLOUR STRIP */}
      <section id="how" className="ps-steps">
        <div className="ps-steps-inner">
          <h2>How Invisalign works here</h2>
          <p className="ps-steps-sub">
            Three simple steps from first visit to confident smile.
          </p>

          <div className="ps-steps-row">
            <div className="ps-step">
              <div className="ps-step-number">1</div>
              <h3>Free consult</h3>
              <p>Meet the team, talk about your goals, and ask anything.</p>
            </div>
            <div className="ps-step">
              <div className="ps-step-number">2</div>
              <h3>3D smile preview</h3>
              <p>
                Quick digital scan — see a preview of how your teeth can move.
              </p>
            </div>
            <div className="ps-step">
              <div className="ps-step-number">3</div>
              <h3>Clear aligners</h3>
              <p>
                Pick up your aligners and come in for short, easy check-ins to
                stay on track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PEAK SMILES – ICON LIST + PHOTO CARD */}
      <section id="why" className="ps-why">
        <div className="ps-why-header">
          <h2>Why patients choose Peak Smiles</h2>
          <p>
            Designed to be easy to start and simple to stick with — from
            flexible payment options to friendly, on-time visits.
          </p>
        </div>

        <div className="ps-why-layout">
          {/* Left: list with icons */}
          <div className="ps-why-list">
            <div className="ps-why-item">
              <div className="ps-why-icon">
                <span role="img" aria-label="chair">
                  🛋️
                </span>
              </div>
              <div className="ps-why-copy">
                <h3>Comfortable visits</h3>
                <p>Bright, modern space and a team that explains every step.</p>
              </div>
            </div>

            <div className="ps-why-item">
              <div className="ps-why-icon">
                <span role="img" aria-label="wallet">
                  💳
                </span>
              </div>
              <div className="ps-why-copy">
                <h3>Flexible payments</h3>
                <p>Monthly options so cost doesn’t get in the way of care.</p>
              </div>
            </div>

            <div className="ps-why-item">
              <div className="ps-why-icon">
                <span role="img" aria-label="scan">
                  📷
                </span>
              </div>
              <div className="ps-why-copy">
                <h3>Modern digital tools</h3>
                <p>3D scans and digital planning for precise, predictable results.</p>
              </div>
            </div>

            <div className="ps-why-item">
              <div className="ps-why-icon">
                <span role="img" aria-label="phone">
                  📱
                </span>
              </div>
              <div className="ps-why-copy">
                <h3>Easy to reach</h3>
                <p>Questions between visits? Call or text the team anytime.</p>
              </div>
            </div>
          </div>

          {/* Right: visual testimonial card */}
          <div className="ps-why-visual">
            <div className="ps-why-photo-card">
              <img
                src="/patient-smile.png"
                alt="Happy Invisalign patient"
                className="ps-why-photo"
              />
              <div className="ps-why-photo-text">
                “Everything was clearly explained, and the aligners were easy to
                fit into my routine.”
              </div>
              <div className="ps-why-photo-meta">
                Invisalign patient – Peak Smiles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section id="contact" className="ps-contact">
        <div className="ps-contact-inner">
          <div>
            <h2>Ready to see if Invisalign is right for you?</h2>
            <p>
              Call us at <a href="tel:15488887325">548-888-7325</a> or send a
              request online and we’ll help you find a time that works.
            </p>
          </div>
          <button className="ps-cta-primary ps-contact-btn">
            Request a free consultation
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="ps-footer">
        <span>© {new Date().getFullYear()} Peak Smiles. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
