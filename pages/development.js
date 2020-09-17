import styles from '../styles/Development.module.css';

import { motion } from 'framer-motion';

const title = {
    initial: {
        x: -300,
        // y: '-20vh',
        opacity: 0
    },
    enter: {
        x: '21vw',
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
        x: '21vw',
        // y: '-20vh',
        width: 0,
        opacity: 0
    },
    enter: {
        width: 500,
        opacity: 1,
        transition: { delay: 1, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: {
        width: 0,
        opacity: 0,
        transition: { delay: 0.2, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
    }
};

const Development = ({}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <motion.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <motion.div variants={title}>
                        <div className={styles.name}>development work</div>
                    </motion.div>
                    <motion.div variants={line} className={styles.line}></motion.div>
                </motion.div>
            </main>
        </div>
    )
};

export default Development;