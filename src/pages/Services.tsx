import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data";
import styles from "./Services.module.css";

export const Services = () => {
    const getIcon = (iconName: string): React.ElementType => {
        const icon = Icons[iconName as keyof typeof Icons];
        return (icon as React.ElementType) || Icons.Zap;
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
                        Our Services
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Comprehensive social media solutions tailored to your
                        brand's needs
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-2">
                        {services.map((service, idx) => {
                            const IconComponent = getIcon(service.icon);
                            return (
                                <motion.div
                                    key={service.id}
                                    className={`card ${styles.serviceCard}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: idx * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className={styles.iconWrapper}>
                                        <IconComponent size={40} />
                                    </div>
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <Link
                                        to="/contact"
                                        className={styles.learnMore}
                                    >
                                        Learn more →
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.processSection}>
                <div className="container text-center">
                    <h2 className="section-title mb-4">Our Process</h2>
                    <div className={styles.processSteps}>
                        {[
                            "Discover",
                            "Strategy",
                            "Create",
                            "Execute",
                            "Analyze",
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                className={styles.step}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.stepNumber}>
                                    {idx + 1}
                                </div>
                                <p>{step}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
