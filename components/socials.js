import styles from '../styles/Nav.module.css';

import { motion } from 'framer-motion';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const socialVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { delay: 1.3, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
      transition: { ease: [0.48, 0.15, 0.25, 0.96] }
    }
}

const Socials = () => {
    return (
        <motion.div
            className={styles.socialsListWrapper}
            whileHover={{ opacity: 1}}
            initial="initial"
            animate="enter"
            exit="exit"
        >
            <motion.ul
                className={styles.socialsList}
                variants={socialVariants}
            >
                <motion.li className={styles.socialsListItem} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
                    <a href='https://www.linkedin.com/in/catherineplevak/'><LinkedInIcon style={{ color: 'red' }}/></a>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.98 }}>
                    <a href='https://www.linkedin.com/in/catherineplevak/'><GitHubIcon style={{ color: 'red' }}/></a>
                </motion.li>
            </motion.ul>
        </motion.div>
    )
};

export default Socials;