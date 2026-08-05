import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="glass-nav">
            <div className="nav-content">
                <div className="logo">
                    <span className="logo-text">Prince</span><span className="logo-dot">.</span>
                </div>
                
                {/* Desktop Nav */}
                <div className="nav-links desktop-only">
                    <a href="#skills">Skills</a>
                    <a href="#problem-solving">DSA</a>
                    <a href="#projects">Projects</a>
                    <a href="#certifications">Certifications</a>
                    <a href="#education">Education</a>
                    <a href="#achievements">Achievements</a>
                    <a href="#contact">Contact</a>
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="mobile-controls mobile-only">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
                        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <a href="#skills" onClick={toggleMenu}>Skills</a>
                <a href="#problem-solving" onClick={toggleMenu}>DSA</a>
                <a href="#projects" onClick={toggleMenu}>Projects</a>
                <a href="#certifications" onClick={toggleMenu}>Certifications</a>
                <a href="#education" onClick={toggleMenu}>Education</a>
                <a href="#achievements" onClick={toggleMenu}>Achievements</a>
                <a href="#contact" onClick={toggleMenu}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
