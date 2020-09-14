import Head from 'next/head';
import MenuToggle from '../menu-toggle';

import { useRef } from "react";
import { motion, useCycle } from "framer-motion";

const MainLayout = ({ children }) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);

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
                    animate={isOpen ? "open" : "closed"}
                    ref={containerRef}
                >
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.nav>
                <div className="content-wrapper">{children}</div>
            </div>
        </div>
    )
};

export default MainLayout;
