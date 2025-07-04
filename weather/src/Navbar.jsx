import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';
import { useEffect } from 'react';
const Navbar = () => {
     useEffect(() => {
      const existingScript = document.getElementById("google-translate-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.id = "google-translate-script";
        script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.type = "text/javascript";
        document.body.appendChild(script);
      }
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    }, []);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Weather', href: '#weather' },
    { name: 'Crop Guide', href: '#crops' },
    { name: 'Soil Testing', href: '#soil' },
    { name: 'Schemes', href: '#schemes' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">

      <div className="navbar-container">
        <div className="navbar-logo">🌾 FarmUp</div>

        <div className="navbar-links">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="navbar-link">
              {item.name}
            </a>
          ))}
        </div>

        <div className="navbar-toggle">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="navbar-mobile">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="mobile-link">
              {item.name}
            </a>
          ))}
        </div>
      )}
      <div id="google_translate_element"></div>
    </nav>
  );
};

export default Navbar;
