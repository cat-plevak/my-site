import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const name = {
    initial: { scale: 0.96, x: -300, opacity: 0 },
    enter: { scale: 1, x: '21vw', opacity: 1, transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.96,
      x: -500,
      opacity: 0,
      transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };
  
  const design = {
    initial: { scale: 0.96, x: -300, opacity: 0 },
    enter: { scale: 1, x: '21vw', opacity: 1, transition: { delay: 0.2, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      delay: 0.3,
      scale: 0.6,
      x: -300,
      opacity: 0,
      transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };
  
  const dev = {
    initial: { scale: 0.96, x: '21.5vw', y: 500, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { delay: 0.2, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      delay: 0.2,
      scale: 0.6,
      y: 500,
      opacity: 0,
      transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };
  
  const accent = {
    initial: { opacity: 0, x: '21.25vw' },
    enter: { opacity: 1, transition: { delay: 1.3, duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
      transition: { ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

  const Home = ({}) => {
    return (
      <div className={styles.container}>
  
        <main className={styles.main}>  
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
            >
                <motion.div variants={name}>
                    <div className={styles.name}>Catherine Plevak</div>
                </motion.div>
                    <div className={styles.subtitles}>
                <motion.div variants={design} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href='/design'>
                        <a>designer</a>
                    </Link>
                </motion.div>
                <motion.div variants={accent}>
                    <div className={styles.accent}>+</div>
                </motion.div>
                <motion.div variants={dev} whileHover={{ color: 'red', scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link href='/development'>
                        <a>developer</a>
                    </Link>
                </motion.div>
                </div>
            </motion.div>
        </main>
  
        <footer className={styles.footer}>
  
        </footer>
      </div>
    )
  }
  
  export default Home;