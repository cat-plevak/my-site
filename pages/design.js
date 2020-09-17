import styles from '../styles/Design.module.css';
import DesignProjects from '../components/design-projects';

import { motion } from 'framer-motion';

const title = {
    initial: {
        x: -300,
        opacity: 0
    },
    enter: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            ease: [0.48, 0.15, 0.25, 0.96]
        }
    },
    exit: {
        x: -500,
        opacity: 0,
        transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
};

const line = {
    initial: {
        x: 0,
        width: 0,
        opacity: 0
    },
    enter: {
        width: '21%',
        opacity: 1,
        transition: { delay: 1.2, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: {
        width: 0,
        opacity: 0,
        transition: { delay: 0.2, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
    }
};

const Design = ({}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <motion.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <motion.div variants={title}>
                        <div className={styles.name}>design work</div>
                    </motion.div>
                    <motion.div variants={line} className={styles.line}></motion.div>
                    <DesignProjects />
                </motion.div>
            </main>
        </div>
    )
};

export default Design;