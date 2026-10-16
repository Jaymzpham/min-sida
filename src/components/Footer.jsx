import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const år = new Date().getFullYear(); // Årtalet just nu

  return (
    <footer className="footer" id="kontakt">
      <div className="footer-rad">
        <p>Tack för att du tittade på min sida!</p>

        <div className="footer-lankar">
          <Link to="/">Hem</Link>
          <Link to="/om-mig">Om mig</Link>
          <a href="mailto:anna@exempel.se">Mejla mig</a>
          <a href="https://github.com">GitHub</a>
        </div>
      </div>

      <p className="footer-copy">© {år} Anna Svensson</p>
    </footer>
  );
}

export default Footer;
