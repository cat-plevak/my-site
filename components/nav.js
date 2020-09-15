import styles from '../styles/Nav.module.css';

import Link from 'next/link';
import { motion } from 'framer-motion';

const listVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
      },
      closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
      }
};

const itemVariants = {
    open: {
        opacity: 1,
        transition: {
          duration: 0.7
        }
      },
      closed: {
        opacity: 0,
        transition: {
          duration: 0.5
        }
      }
};

const Nav = () => {
    return (
        <motion.div className={styles.navContainer} whileHover={{ opacity: 1 }}>

            <motion.ul  className={styles.navList}  variants={listVariants}>
                <motion.li variants={itemVariants} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href='/'>
                        <a>c.p.</a>
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    development work
                </motion.li>
                <motion.li variants={itemVariants} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href='/about'>
                        <a>about</a>
                    </Link>
                </motion.li>
                <motion.li variants={itemVariants} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    resume
                </motion.li>
                <motion.li variants={itemVariants} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    contact
                </motion.li>
            </motion.ul>
        </motion.div>
    )
}

export default Nav;