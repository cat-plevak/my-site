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
                duration: 1,
                ease: [0.48, 0.15, 0.25, 0.96] 
             },
    },
    exit: {
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
                    <div className={styles.flexWrapper}>
                        <motion.div variants={title}>
                            <div className={styles.name}>about</div>
                        </motion.div>
                    </div>
                    <div className={styles.flexWrapper}>
                        <motion.div variants={body}>
                            <div className={styles.body}>Howdy! But figured I should streamline things a bit if I wanted any shot at making a living. C'est la vie. I'm passionate about collaboration and learning from people and pushing myself to be infintely multi-disciplinary. I am a lover of pies and swiss design and my dog, Whoopi. Professionally, I'm kind of obsessed with design systems and designer/developer collaboration. If you're interested in learing more about my work with design systems, you can check it out here, here, and here.</div>
                        </motion.div>
                    </div>
                </motion.div>
            </main>
        </div>
    )
};

export default About;

// christina tosi, if you are reading this, I want to be your friend very badly