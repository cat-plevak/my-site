import styles from '../styles/Design.module.css';
import { useState } from 'react';
import Link from 'next/link';

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
        transition: {
            duration: 0.5
        }
    }
}

const DesignProjects = ({}) => {
    const [selectedProject, setSelectedProject] = useState(null)
    console.log(selectedProject)

    return (
        <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        >
            <motion.div  variants={projectsList} className={styles.projectsList}>
                { (selectedProject === null || selectedProject === 1) &&
                    // <Link href='/one'>
                        <a onClick={() => setSelectedProject(1)}>
                            <motion.div variants={projectsItem} className={styles.project}>
                                project one
                            </motion.div>
                        </a>
                    // </Link>
                }
                { (selectedProject === null || selectedProject === 2) &&
                    // <Link href='/designProjects/one'>
                        <a onClick={() => setSelectedProject(2)}>
                            <motion.div variants={projectsItem} className={styles.project}>
                                project one
                            </motion.div>
                        </a>
                    // </Link>
                }
                { (selectedProject === null || selectedProject === 3) &&
                    // <Link href='/designProjects/one'>
                        <a onClick={() => setSelectedProject(3)}>
                            <motion.div variants={projectsItem} className={styles.project}>
                                project one
                            </motion.div>
                        </a>
                    // </Link>
                }
            </motion.div>
        </motion.div>
    )
};

export default DesignProjects;