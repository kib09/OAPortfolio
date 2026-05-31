import { useEffect, useState } from 'react';
import { navItems } from '../data/profile';

/** 스크롤 시 고정 네비게이션 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`site-header${scrolled ? ' site-header--scrolled' : ''}`}>
      <div className="container site-header__inner">
        <a
          href="#hero"
          className="site-header__logo"
          onClick={(e) => {
            e.preventDefault();
            handleNav('hero');
          }}
        >
          <span className="site-header__logo-mark">IB</span>
          <span>김인배</span>
        </a>

        <button
          type="button"
          className="site-header__menu-btn"
          aria-expanded={menuOpen}
          aria-label="메뉴 열기"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`site-header__nav${menuOpen ? ' site-header__nav--open' : ''}`}
          aria-label="주요 섹션"
        >
          {navItems.map((item) => (
            <button key={item.id} type="button" onClick={() => handleNav(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
