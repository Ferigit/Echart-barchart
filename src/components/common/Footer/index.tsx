import React from 'react';

interface FooterProps {
  copyrightText?: string;
  socialLinks?: { url: string; icon: string }[];
}

const Footer: React.FC<FooterProps> = ({ copyrightText, socialLinks = [] }) => (
  <footer className="footer">
    <div className="footer-content">
      {copyrightText && <p className="copyright">{copyrightText}</p>}
      {socialLinks.length > 0 && (
        <ul className="social-links">
          {socialLinks.map(({ url, icon }) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt="Social Link" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  </footer>
);

export default Footer;
