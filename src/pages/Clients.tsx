import { motion } from "framer-motion";
import { clients } from "../data";
import styles from "./Clients.module.css";

export const Clients = () => {
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
                        Our Clients
                    </motion.h1>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Trusted by innovative brands across various industries
                    </motion.p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid grid-4">
                        {clients.map((client, idx) => (
                            <motion.div
                                key={client.id}
                                className={styles.clientCard}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.05 }}
                            >
                                <div className={styles.logo}>{client.logo}</div>
                                <h3>{client.name}</h3>
                                <p className={styles.industry}>
                                    {client.industry}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.testimonials}>
                <div className="container text-center">
                    <h2 className="section-title mb-4">What Our Clients Say</h2>
                    <div className="grid grid-2">
                        {[
                            {
                                quote: "ASMEDIA transformed our social media presence completely. Their strategy and execution were outstanding.",
                                author: "CEO, Tech Startup",
                            },
                            {
                                quote: "Working with ASMEDIA was a game-changer for our brand. Highly professional and results-oriented.",
                                author: "Marketing Director, Fashion Brand",
                            },
                            {
                                quote: "The team at ASMEDIA understands our brand vision and executes flawlessly. Highly recommended!",
                                author: "Founder, Fitness Company",
                            },
                            {
                                quote: "Best decision we made was partnering with ASMEDIA. Our engagement rates have doubled!",
                                author: "Owner, Restaurant Group",
                            },
                        ].map((testimonial, idx) => (
                            <motion.div
                                key={idx}
                                className="card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <p className={styles.quote}>
                                    "{testimonial.quote}"
                                </p>
                                <p className={styles.author}>
                                    — {testimonial.author}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
