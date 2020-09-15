import styles from '../styles/About.module.css';

import { motion } from 'framer-motion';

const title = {
    initial: {
        x: -300,
        y: '-20vh',
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
}

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
                </motion.div>
            </main>
        </div>
    )
};

export default Design;