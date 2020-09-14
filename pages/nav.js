import styles from '../styles/Nav.module.css';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Nav = ({}) => {
    return (
        <main>
            <motion.div initial="exit" animate="enter" exit="exit">
                <ul>
                    <li>
                        <Link href='/'>
                            <a>design work</a>
                        </Link>
                    </li>
                    <li>
                        development work
                    </li>
                    <li>
                        about
                    </li>
                    <li>
                        resume
                    </li>
                    <li>
                        contact
                    </li>
                </ul>
             </motion.div>
        </main>
    )
}

export default Nav;