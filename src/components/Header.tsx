import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Header.module.css";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDark, toggleTheme } = useTheme();
    const location = useLocation();

    const navItems = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/services", label: "Services" },
        // { path: "/clients", label: "Clients" },
        { path: "/careers", label: "Careers" },
        { path: "/contact", label: "Contact" },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <img
                        src="/logo.png"
                        alt="ABO MEDIA"
                        className={styles.logoImg}
                    />
                </Link>

                <nav
                    className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`${styles.navLink} ${isActive(item.path) ? styles.active : ""}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className={styles.actions}>
                    <button
                        onClick={toggleTheme}
                        className={styles.themeToggle}
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button
                        className={styles.menuButton}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};
