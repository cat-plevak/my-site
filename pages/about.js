import styles from '../styles/About.module.css';

import { motion } from 'framer-motion';

const title = {
    initial: {
        x: -300,
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

const body = {
    initial: {
        x: '21vw',
        y: 500,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1, 
        transition:
            {
                delay: 0.2,
                duration: 1,
                ease: [0.48, 0.15, 0.25, 0.96] 
             },
    },
    exit: {
        delay: 0.2,
        y: 500,
        opacity: 0,
        transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
      }
}

const About = ({}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <motion.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <motion.div variants={title}>
                        <div className={styles.name}>about</div>
                    </motion.div>
                    <motion.div variants={body}>
                        <div className={styles.body}>Howdy! This is where I will tell you about myself.</div>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
};

export default About;