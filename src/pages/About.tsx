import { motion } from "framer-motion";
import { teamMembers } from "../data";
import styles from "./About.module.css";

export const About = () => {
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
                        About ASMEDIA
                    </motion.h1>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <motion.div
                        className={styles.storySection}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title mb-4">Our Story</h2>
                        <p className={styles.storyText}>
                            ASMEDIA was founded with a simple yet powerful
                            vision: to help brands tell their stories and
                            connect authentically with their audiences through
                            strategic social media solutions. What started as a
                            passion project has evolved into a full-service
                            digital agency dedicated to transforming how
                            businesses engage on social platforms.
                        </p>
                        <p className={styles.storyText}>
                            We believe that great social media strategy is more
                            than just posting content. It's about understanding
                            your audience, crafting meaningful narratives, and
                            creating genuine connections. Our team brings
                            together creative minds, data-driven strategists,
                            and passionate storytellers who are committed to
                            driving real results for our clients.
                        </p>
                        <p className={styles.storyText}>
                            Today, we're proud to partner with innovative brands
                            across various industries, helping them grow,
                            engage, and succeed in the ever-changing digital
                            landscape.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className={styles.teamSection}>
                <div className="container">
                    <h2 className="section-title text-center mb-4">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-3">
                        {teamMembers.map((member, idx) => (
                            <motion.div
                                key={member.id}
                                className={styles.teamCard}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className={styles.avatar}>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className={styles.avatarImg}
                                    />
                                </div>
                                <h3>{member.name}</h3>
                                <p className={styles.role}>{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
