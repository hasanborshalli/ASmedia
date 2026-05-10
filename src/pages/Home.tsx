import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
    const features = [
        {
            icon: Zap,
            title: "Lightning Fast",
            desc: "Quick turnaround on campaigns",
        },
        {
            icon: TrendingUp,
            title: "Results Driven",
            desc: "Measurable growth for your brand",
        },
        {
            icon: Users,
            title: "Expert Team",
            desc: "Industry-leading professionals",
        },
    ];

    return (
        <div>
            <section className={styles.hero}>
                <div className="container">
                    <motion.div
                        className={styles.heroContent}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className={styles.title}>
                            Transform Your Social Media Presence
                        </h1>
                        <p className={styles.subtitle}>
                            Elevate your brand with strategic social media
                            solutions tailored to your success.
                        </p>
                        <div className={styles.ctaButtons}>
                            <Link to="/services" className="btn btn-primary">
                                Explore Services <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Get Started
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className={`${styles.features} section`}>
                <div className="container">
                    <h2 className="section-title text-center mb-4">
                        Why Choose ASMEDIA?
                    </h2>
                    <div className="grid grid-3">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <feature.icon
                                    size={40}
                                    style={{
                                        color: "var(--primary)",
                                        marginBottom: "1rem",
                                    }}
                                />
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">
                            Ready to Grow Your Brand?
                        </h2>
                        <p
                            style={{
                                fontSize: "1.1rem",
                                opacity: 0.8,
                                marginBottom: "2rem",
                            }}
                        >
                            Let's create something amazing together.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
