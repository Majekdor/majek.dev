import NextLink from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const THEMES = ['auto', 'light', 'dark'];

function useTheme() {
  const [theme, setTheme] = useState('auto');

  useEffect(() => {
    const stored = window.localStorage.getItem('theme');
    if (stored && THEMES.includes(stored)) {
      setTheme(stored);
    }
  }, []);

  const chooseTheme = (value) => {
    setTheme(value);
    window.localStorage.setItem('theme', value);
    document.documentElement.setAttribute('data-theme', value);
  };

  return [theme, chooseTheme];
}

export default function Layout({ children, title = '' }) {
  const [theme, chooseTheme] = useTheme();

  return <>
    <Head>
      <title>{'majek.dev' + (title && ' | ' + title)}</title>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
      <script defer src="https://metrics.kevbarnes.com/script.js" data-website-id="772c9702-d5e7-46e8-925d-f862e42c8742"></script>
    </Head>
    <Sidebar theme={theme} onChooseTheme={chooseTheme} />
    <Content children={children} />
    <PageFooter theme={theme} onChooseTheme={chooseTheme} />
  </>
}

const Sidebar = ({ theme, onChooseTheme }) => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    setNavOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    if (!navOpen) {
      return;
    }
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setNavOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [navOpen]);

  return (
    <div className="sidebar">
      <Header navOpen={navOpen} onToggleNav={() => setNavOpen(open => !open)} navRef={navRef} />
      <div className="sidebar-footer">
        <Footer />
        <ThemeToggle theme={theme} onChooseTheme={onChooseTheme} />
      </div>
    </div>
  )
}

const Header = ({ navOpen, onToggleNav, navRef }) => {
  return (
    <header className="container">
      <div className="header-top" ref={navRef}>
        <div className="logo-mark">
          <img src="/assets/logo.png" alt="majek.dev logo" />
        </div>
        <button
          type="button"
          className="hamburger"
          aria-label="Toggle navigation"
          aria-expanded={navOpen}
          onClick={onToggleNav}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {navOpen
              ? <path d="M5 5l14 14M19 5L5 19" />
              : <path d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
        <Nav className={'nav-dropdown' + (navOpen ? ' open' : '')} />
      </div>
      <h1>majek.dev</h1>
      <p className="tagline">Dev domain for my open-source Minecraft projects and the infrastructure that powers them.</p>
      <Nav className="nav-static" />
    </header>
  )
}

const Nav = ({ className }) => {
    return (
        <nav className={className}>
            <ul>
                <Link name="/home" url="/" />
                <Link name="/contact" url="/contact" />
                <Link name="/movies" url="/movies" />
                <Link name="/tvshows" url="/tvshows" />
            </ul>
        </nav>
    )
}

const Link = ({ name, url }) => {
    const router = useRouter();
    if (url === router.pathname) {
        return (
            <li className="current-page">
                {name}
            </li>
        )
    } else {
        return (
            <li className="other-page">
                <NextLink href={url}>
                    {name}
                </NextLink>
            </li>
        )
    }
}

const Footer = () => {
  return (
    <footer className="container">
      <p>&copy; 2020-26 <a href="https://github.com/Majekdor">Majekdor</a></p>
    </footer>
  )
}

const THEME_ICONS = {
  auto: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 2v14a7 7 0 010-14z" />,
  light: <path d="M12 4V2m0 20v-2M4 12H2m20 0h-2M5.6 5.6L4.2 4.2m15.6 1.4l1.4-1.4M5.6 18.4l-1.4 1.4m15.6-1.4l1.4 1.4M12 7a5 5 0 100 10 5 5 0 000-10z" />,
  dark: <path d="M20.7 14.9A8.5 8.5 0 0110.1 4.3a.6.6 0 00-.7-.8A9 9 0 1021.5 15.6a.6.6 0 00-.8-.7z" />,
};

const ThemeToggle = ({ theme, onChooseTheme }) => {
  return (
    <div className="theme-toggle" role="group" aria-label="Theme">
      {THEMES.map((value) => (
        <button
          key={value}
          type="button"
          className={theme === value ? 'active' : ''}
          title={value.charAt(0).toUpperCase() + value.slice(1)}
          aria-label={value}
          onClick={() => onChooseTheme(value)}
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {THEME_ICONS[value]}
          </svg>
        </button>
      ))}
    </div>
  )
}

const Content = ({ children }) => {
  return (
    <main className="content container page">
      {children}
    </main>
  )
}

const PageFooter = ({ theme, onChooseTheme }) => {
  return (
    <div className="page-footer container">
      <Footer />
      <ThemeToggle theme={theme} onChooseTheme={onChooseTheme} />
    </div>
  )
}
