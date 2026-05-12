import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Users, Target, Award, X } from "lucide-react";
import styles from "./Careers.module.css";

interface Position {
    id: number;
    title: string;
    level: string;
    location: string;
    desc: string;
}

interface ApplicationForm {
    name: string;
    email: string;
    phone: string;
    experience: string;
    portfolio: string;
    coverLetter: string;
}

const EMPTY_FORM: ApplicationForm = {
    name: "",
    email: "",
    phone: "",
    experience: "",
    portfolio: "",
    coverLetter: "",
};

export const Careers = () => {
    const [selectedPosition, setSelectedPosition] = useState<Position | null>(
        null,
    );
    const [formData, setFormData] = useState<ApplicationForm>(EMPTY_FORM);
    const [submitted, setSubmitted] = useState(false);

    const benefits = [
        {
            icon: Briefcase,
            title: "Competitive Salary",
            desc: "Attractive compensation packages",
        },
        {
            icon: Users,
            title: "Team Culture",
            desc: "Collaborative and creative environment",
        },
        {
            icon: Target,
            title: "Growth",
            desc: "Career development opportunities",
        },
        {
            icon: Award,
            title: "Recognition",
            desc: "Rewards for outstanding performance",
        },
    ];

    const positions: Position[] = [
        {
            id: 1,
            title: "Expert Content Creator",
            level: "Mid-Level",
            location: "Beirut, Downtown",
            desc: "Produce high-quality, platform-optimized content across social media channels — from short-form video to static visuals and copy.",
        },
        {
            id: 2,
            title: "Professional Account Manager",
            level: "Mid-Level",
            location: "Beirut, Downtown",
            desc: "Own client relationships and oversee day-to-day social media operations, ensuring consistent brand presence and peak performance.",
        },
    ];

    /* Lock body scroll when modal is open */
    useEffect(() => {
        if (selectedPosition) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedPosition]);

    /* Close on Escape */
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") closeModal();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const closeModal = () => {
        setSelectedPosition(null);
        setSubmitted(false);
        setFormData(EMPTY_FORM);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPosition) return;

        const subject = encodeURIComponent(
            `Application for ${selectedPosition.title}`,
        );
        const body = encodeURIComponent(
            `Position: ${selectedPosition.title} (${selectedPosition.level} · ${selectedPosition.location})\n` +
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Phone: ${formData.phone || "—"}\n` +
                `Years of Experience: ${formData.experience}\n` +
                `Portfolio / LinkedIn: ${formData.portfolio || "—"}\n\n` +
                `Cover Letter:\n${formData.coverLetter}`,
        );

        window.location.href = `mailto:careers@abomedia.com?subject=${subject}&body=${body}`;
        setSubmitted(true);
        setTimeout(closeModal, 2500);
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) closeModal();
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
                        Join Our Team
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Be part of a creative and driven team transforming
                        social media
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center mb-4">
                        Why Join ABO MEDIA?
                    </h2>
                    <div className="grid grid-4">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <benefit.icon
                                    size={40}
                                    style={{
                                        color: "var(--primary)",
                                        marginBottom: "1rem",
                                    }}
                                />
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.openPositions}>
                <div className="container">
                    <h2 className="section-title text-center mb-4">
                        Open Positions
                    </h2>
                    <div className={styles.positionsList}>
                        {positions.map((position, idx) => (
                            <motion.div
                                key={position.id}
                                className={styles.positionCard}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.positionHeader}>
                                    <div>
                                        <h3>{position.title}</h3>
                                        <p className={styles.level}>
                                            {position.level} •{" "}
                                            {position.location}
                                        </p>
                                    </div>
                                    <motion.button
                                        className="btn btn-primary"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() =>
                                            setSelectedPosition(position)
                                        }
                                    >
                                        Apply Now
                                    </motion.button>
                                </div>
                                <p className={styles.description}>
                                    {position.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container text-center">
                    <h2 className="section-title">
                        Don't see the right position?
                    </h2>
                    <p
                        style={{
                            fontSize: "1.1rem",
                            opacity: 0.9,
                            marginBottom: "2rem",
                        }}
                    >
                        Send us your resume and let's talk about opportunities!
                    </p>
                    <motion.a
                        href="mailto:careers@abomedia.com"
                        className="btn btn-primary"
                        whileHover={{ scale: 1.05 }}
                    >
                        Email Us Your Resume
                    </motion.a>
                </div>
            </section>

            {/* ── Apply Now modal ── */}
            <AnimatePresence>
                {selectedPosition && (
                    <motion.div
                        className={styles.modalOverlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={handleOverlayClick}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className={styles.modalHeader}>
                                <div>
                                    <h2 className={styles.modalTitle}>
                                        Apply Now
                                    </h2>
                                </div>
                                <button
                                    className={styles.closeButton}
                                    onClick={closeModal}
                                    aria-label="Close modal"
                                >
                                    <X size={22} />
                                </button>
                            </div>
                            <p className={styles.modalPosition}>
                                {selectedPosition.title} ·{" "}
                                {selectedPosition.level} ·{" "}
                                {selectedPosition.location}
                            </p>

                            {submitted ? (
                                <motion.div
                                    className={styles.successMessage}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    ✓ Your email client is opening — please send
                                    the pre-filled message to complete your
                                    application!
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="name">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Jane Smith"
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="jane@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="phone">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="experience">
                                                Years of Experience *
                                            </label>
                                            <select
                                                id="experience"
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">
                                                    Select…
                                                </option>
                                                <option value="Less than 1 year">
                                                    Less than 1 year
                                                </option>
                                                <option value="1–3 years">
                                                    1–3 years
                                                </option>
                                                <option value="3–5 years">
                                                    3–5 years
                                                </option>
                                                <option value="5+ years">
                                                    5+ years
                                                </option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="portfolio">
                                            Portfolio / LinkedIn URL
                                        </label>
                                        <input
                                            type="url"
                                            id="portfolio"
                                            name="portfolio"
                                            value={formData.portfolio}
                                            onChange={handleChange}
                                            placeholder="https://linkedin.com/in/yourname"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="coverLetter">
                                            Cover Letter *
                                        </label>
                                        <textarea
                                            id="coverLetter"
                                            name="coverLetter"
                                            value={formData.coverLetter}
                                            onChange={handleChange}
                                            placeholder="Tell us why you're a great fit for this role and what excites you about joining ABO MEDIA…"
                                            rows={5}
                                            required
                                        />
                                    </div>

                                    <div className={styles.modalActions}>
                                        <button
                                            type="button"
                                            className="btn btn-outline"
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                        <motion.button
                                            type="submit"
                                            className="btn btn-primary"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Submit Application
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
