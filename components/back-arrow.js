import styles from '../styles/Design.module.css';
import Link from 'next/link';

import { motion } from 'framer-motion';

const Path = props => (
    <motion.path
        fill="#EB3629"
        strokeWidth="3"
        stroke="#EB3629"
        strokeLinecap="round"
        {...props}
    />
);

const BackArrow = ({path}) => {
    return (
        <Link href={`/${path}`}>
                <a>
            <motion.div whileHover={{ color: '#EB3629', scale: 1.005 }} whileTap={{ scale: 0.98 }}>
                    <svg width="70" height="30" viewBox="0 0 120 20">
                            <Path
                                d="M 15 16.346 L 120 16.346"
                            />
                            <Path
                                d="M 14 16.346 L 35 35"
                            />
                            <Path
                                d="M 14 16.346 L 35 -3"
                            />
                    </svg>
            </motion.div>
                </a>
        </Link>
    )
};

export default BackArrow