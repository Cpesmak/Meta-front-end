import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <nav aria-label="Footer Navigation">
        <p>© 2024 Little Lemon. All rights reserved.</p>
        <ul className="footer-links">
          <li>
            <a href="/privacy-policy" aria-label="Privacy Policy">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms-of-service" aria-label="Terms of Service">
              Terms of Service
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;

