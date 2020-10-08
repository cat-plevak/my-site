import { motion } from 'framer-motion';
import styles from '../styles/Design.module.css';

import BackArrow from '../components/back-arrow'

const backArrow = {
    initial: {
        x: 0,
        width: 0,
        opacity: 0
    },
    enter: {
        width: '24%',
        opacity: 1,
        transition: { delay: 0.5, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: {
        width: 0,
        opacity: 0,
        transition: { delay: 0.2, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
    }
}

const projectTitle = {
    initial: {
        y: 1000,
        opacity: 0
    },
    enter: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.4, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: {
        y: 1000,
        opacity: 0,
        transition: { delay: 0.2, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    } 
}

const ProjectOne = ({}) => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <motion.div
                    initial="initial"
                    animate="enter"
                    exit="exit"
                >
                    <motion.div variants={backArrow}>
                        <BackArrow path='design' />
                    </motion.div>
                    <motion.div  variants={projectTitle} className={styles.projectTitle}>
                        project one
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
};

export default ProjectOne;