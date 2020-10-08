import Head from 'next/head';
import MenuToggle from '../menu-toggle';
import Nav from '../nav';
import Socials from '../socials';
import { useDimensions } from '../../utils/use-dimensions';
import navStyles from '../../styles/Nav.module.css';

import { useRouter } from 'next/router'
import Link from 'next/link';
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

const logoVariants = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { delay: 1.3, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
      transition: { ease: [0.48, 0.15, 0.25, 0.96] }
    }
}

const MainLayout = ({ children }) => {
    const router = useRouter();
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <div>
            <Head>
                <title>catherine plevak</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Poppins&display=swap" rel="stylesheet"/>
            </Head>
            <div className="page-wrapper">
                <div className='nav-container'>
                    <motion.div
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        <motion.div variants={logoVariants} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={navStyles.homeButton}>
                            <Link href='/'>
                                <a>catherineplevak</a>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.nav
                        initial={false}
                        custom={height}
                        animate={isOpen ? "open" : "closed"}
                        ref={containerRef}
                    >
                        <div className="nav">
                            <Nav />
                        </div>
                        <MenuToggle toggle={() => toggleOpen()} />
                    </motion.nav>
                </div>
                <div className="content-wrapper">{children}</div>
                <Socials />
            </div>
        </div>
    )
};

export default MainLayout;
