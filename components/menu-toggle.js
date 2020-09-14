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

  const MenuToggle = ({ toggle }) => (
    <button className={styles.menuToggle} onClick={toggle}>
      <svg width="30" height="15" viewBox="0 0 60 30">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 60 2.5" },
            open: { d: "M 3 25 L 30 2.5" }
          }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 35 16.346" },
            open: { d: "M 3 2.5 L 30 25" }
          }}
        />
      </svg>
    </button>
  );

  export default MenuToggle;