import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: "", email: "", message: "" });
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div>
            <section className={styles.hero}>
                <div className="container">
                    <motion.h1
                        className={styles.title}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Have a project in mind? Let's discuss your social media
                        goals.
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="section-title mb-4">
                                Contact Information
                            </h2>
                            <div className={styles.contactInfo}>
                                <div className={styles.infoItem}>
                                    <Mail size={24} />
                                    <div>
                                        <h3>Email</h3>
                                        <a href="mailto:info@abomedia.com">
                                            info@abomedia.com
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <Phone size={24} />
                                    <div>
                                        <h3>Phone</h3>
                                        <a href="tel:+1234567890">
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoItem}>
                                    <MapPin size={24} />
                                    <div>
                                        <h3>Address</h3>
                                        <p>
                                            Beirut, Downtown
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.hours}>
                                <h3>Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday: 10:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </motion.div>

                        <motion.form
                            className={styles.contactForm}
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project..."
                                    rows={6}
                                    required
                                />
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Send Message <Send size={20} />
                            </motion.button>

                            {submitted && (
                                <motion.div
                                    className={styles.successMessage}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✓ Thank you! We'll get back to you soon.
                                </motion.div>
                            )}
                        </motion.form>
                    </div>
                </div>
            </section>
        </div>
    );
};
