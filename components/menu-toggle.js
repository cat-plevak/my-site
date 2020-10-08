import { motion } from "framer-motion";
import { useState } from 'react';

import styles from '../styles/Nav.module.css';

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="transparent"
        strokeLinecap="round"
        {...props}
    >
        <animate attributeName='stroke' dur='0.5s' from='transparent' to='#EB3629' fill='freeze' begin='0.7s'/>
    </motion.path>
);

  const MenuToggle = ({ toggle }) => (
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
  );

  export default MenuToggle;