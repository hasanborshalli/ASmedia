import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
} from "lucide-react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                    <h3>ASMEDIA</h3>
                    <p>
                        Transforming brands through strategic social media
                        solutions.
                    </p>
                </div>

                <div className={styles.section}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Contact</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <Mail size={16} />{" "}
                            <a href="mailto:info@asmedia.com">
                                info@asmedia.com
                            </a>
                        </li>
                        <li>
                            <Phone size={16} />{" "}
                            <a href="tel:+1234567890">+1 (234) 567-890</a>
                        </li>
                        <li>
                            <MapPin size={16} />{" "}
                            <span>123 Media Street, NY 10001</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h4>Follow Us</h4>
                    <div className={styles.socials}>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.divider}></div>

            <div className={styles.bottom}>
                <p>&copy; 2026 ASMEDIA. All rights reserved.</p>
            </div>
        </footer>
    );
};
