import Head from 'next/head';
import MenuToggle from '../menu-toggle';
import Nav from '../nav';
import Socials from '../socials';
import { useDimensions } from '../../utils/use-dimensions';

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 40px 40px)",
        transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40
        }
    }
};

const MainLayout = ({ children }) => {
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
                <motion.nav
                    initial={false}
                    custom={height}
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}
                >
                    <Nav />
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
                <Socials />
                <div className="content-wrapper">{children}</div>
            </div>
        </div>
    )
};

export default MainLayout;
