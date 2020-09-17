import styles from '../styles/Design.module.css';

import { motion } from 'framer-motion';

const projectsList = {
    enter: {
        transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    },
    exit: {
        transition: { staggerChildren: 0.2, staggerDirection: -1 }
    }
}

const projectsItem = {
    initial: {
        opacity: 0,
        // x: '21vw'
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        transitoion: {
            duration: 0.5
        }
    }
}

const DesignProjects = ({}) => {
    return (
        <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        >
            <motion.div  variants={projectsList} className={styles.projectsList}>
                <motion.div variants={projectsItem} className={styles.project}></motion.div>
                <motion.div variants={projectsItem} className={styles.project}></motion.div>
                <motion.div variants={projectsItem} className={styles.project}></motion.div>
            </motion.div>
        </motion.div>
    )
};

export default DesignProjects;