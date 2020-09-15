import { motion } from "framer-motion";

import styles from '../styles/Nav.module.css';

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="red"
        strokeLinecap="round"
        {...props}
    />
);

const variants = {
    initial: { opacity: 1 },
    enter: {
        opacity: 1,
        transition: { delay: 1.3, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    },
    exit: {
        opacity: 0,
        transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
};

  const MenuToggle = ({ toggle }) => (
            <motion.div variants={variants}>
                <button className={styles.menuToggle} onClick={toggle}>
                    <svg width="40" height="30" viewBox="0 0 60 20">
                        <Path
                        variants={{
                            closed: { d: "M 2 2.5 L 60 2.5" },
                            open: { d: "M 20 25 L 45 2.5" }
                        }}
                        />
                        <Path
                        variants={{
                            closed: { d: "M 15 16.346 L 60 16.346" },
                            open: { d: "M 20 2.5 L 45 25" }
                        }}
                        />
                    </svg>
                </button>
            </motion.div>
  );

  export default MenuToggle;