import styles from '../styles/Nav.module.css';

import { motion } from 'framer-motion';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Socials = () => {
    return (
        <motion.div  className={styles.socialsListWrapper} whileHover={{ opacity: 1}}>
            <motion.ul className={styles.socialsList}>
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