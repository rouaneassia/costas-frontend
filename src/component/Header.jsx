// src/components/Header.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Cookies from 'js-cookie';
import { useTranslation } from "react-i18next";
import '../translation/i18n';

const storedLang = Cookies.get('lang') || 'fr';

function AnimatedHamburger({ open, toggle }) {
  return (
    <button
      onClick={toggle}
      className="relative w-8 h-8 flex flex-col justify-between items-center group md:hidden"
      aria-label="Toggle menu"
    >
      <span className={`block h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
      <span className={`block h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "opacity-0" : "opacity-100"}`} />
      <span className={`block h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
    </button>
  );
}

export default function Header() {
  const [selectedLanguage, setSelectedLanguage] = useState(storedLang);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  // console.log(t('header.login'));

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setSelectedLanguage(code);
    Cookies.set('lang', code, {
      expires: 365,
      path: '/',
      secure: true,
      sameSite: 'Strict'
    });
  };

  const isActive = (path) => location.pathname === path ? "text-blue-600 font-bold underline" : "";
  const languageDirection = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md">

      {/* Top Bar */}
      <div className="bg-black text-white flex justify-between items-center px-6 py-2 max-md:hidden">
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-base text-cyan-500" />
          <span className="text-cyan-500">{t('header.support')}</span>
          <a href="tel:+212522300725" className="font-semibold text-cyan-500">
            +212522300725/26
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:costas@mail.com" className="flex items-center gap-1 text-cyan-500">
            <MdEmail className="text-xl" />
            <span>costas@mail.com</span>
          </a>
          <a href="#" className="text-cyan-500 text-xl">
            <FaWhatsapp />
          </a>

          <select
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="bg-black text-cyan-500 border border-cyan-500 rounded px-2 py-1"
            defaultValue={i18n.language}
          >
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white text-black flex justify-between items-center px-4 h-20 relative z-50">
        <img src="COSTAS.webp" alt="Logo" className="h-20 w-auto" />

        <nav dir={languageDirection} className="hidden md:flex items-center gap-6 font-semibold">
          <Link to="/" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/")}`}>
            {t('header.home')}
          </Link>
          <Link to="/a-propos" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/a-propos")}`}>
            {t('header.about')}
          </Link>
          <Link to="/domaine" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/domaine")}`}>
            {t('header.domaine.title')}
          </Link>
          <Link to="/contact" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/contact")}`}>
            {t('header.contact')}
          </Link>
          <Link to="/equipe" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/equipe")}`}>
            {t('header.team')}
          </Link>
          <Link to="/publication" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/publication")}`}>
            {t('header.publication')}
          </Link>
          {/* Login link */}
          <Link to="/login" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/login")}`}>
              {t('header.login')}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <AnimatedHamburger open={open} toggle={() => setOpen(!open)} />
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-white text-black px-4 py-4 space-y-4 font-semibold shadow-lg absolute w-full left-0 z-40">
          <Link to="/" onClick={() => setOpen(false)} className={`block uppercase hover:text-cyan-500 ${isActive("/")}`}>
            {t('header.home')}
          </Link>
          <Link to="/a-propos" onClick={() => setOpen(false)} className={`block uppercase hover:text-cyan-500 ${isActive("/a-propos")}`}>
            {t('header.about')}
          </Link>
          <Link to="/domaine" onClick={() => setOpen(false)} className={`block uppercase hover:text-cyan-500 ${isActive("/domaine")}`}>
            {t('header.domaine.title')}
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)} className={`block uppercase hover:text-cyan-500 ${isActive("/contact")}`}>
            {t('header.contact')}
          </Link>
          <Link to="/equipe" onClick={() => setOpen(false)} className={`block uppercase hover:text-cyan-500 ${isActive("/equipe")}`}>
            {t('header.team')}
          </Link>
          <Link to="/publication" onClick={() => setOpen(false)} className={`block uppercase hover:text-cyan-500 ${isActive("/publication")}`}>
            {t('header.publication')}
          </Link>
          {/* Login link */}
          <Link to="/login" className={`uppercase hover:text-cyan-500 hover:underline ${isActive("/login")}`}>
            {t('header.login')}
          </Link>

        </nav>
      )}
    </header>
  );
}
