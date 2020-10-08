import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const hello = {
  initial: { x: '18vw', opacity: 0 },
  enter: { scale: 1, x: '21vw', opacity: 1, transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
  exit: {
    x: '18vw',
    opacity: 0,
    transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
  }
};

const name = {
    initial: { x: '18vw', opacity: 0 },
    enter: { scale: 1, x: '21vw', opacity: 1, transition: { delay: 0.2, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      y: '10vw',
      opacity: 0,
      transition: { duration: 1.4, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };
  
  const blurbDown = {
    initial: { scale: 0.96, x: '21.5vw', y: 30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { delay: 0.6, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      delay: 0.2,
      scale: 0.6,
      y: 30,
      opacity: 0,
      transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

  const blurbUp = {
    initial: { scale: 0.96, x: '21.5vw', y: -30, opacity: 0 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { delay: 0.6, duration: 1, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      delay: 0.2,
      scale: 0.6,
      y: -30,
      opacity: 0,
      transition: { duration: 1, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  }
  
  const accent = {
    initial: { opacity: 0, x: '21.5vw' },
    enter: { opacity: 1, transition: { delay: 1.3, duration: 0.7, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      opacity: 0,
      transition: { ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

  const rotated = {
    initial: { opacity: 0, x: '22.1vw', y: 10 },
    enter: { y: 22, opacity: 1, transition: { delay: 1.3, duration: 0.7, ease: [0.48, 0.15, 0.25, 0.96] } },
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
                className={styles.flexwrapper}
            >
            <div className={styles.blocks}>
                <motion.div
                  className={styles.div2}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                />
                <motion.div
                  className={styles.div3}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                />
                <motion.div
                  className={styles.div1}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                />
            </div>
              <div className={styles.helloWrapper}>
                <motion.div variants={hello}>
                    <div className={styles.hello}>hi,</div>
                </motion.div>
              </div>
              <div className={styles.nameWrapper}>
                <motion.div variants={name}>
                    <div className={styles.name}>i'm <span className={styles.italic}>cat</span></div>
                </motion.div>
                <motion.div variants={rotated}>
                  <p className={styles.rotated}>i'm a</p>
                </motion.div>
                <div className={styles.subtitles}>
                  <motion.div>
                      <motion.div variants={blurbUp} whileHover={{ color: '#000000', scale: 1.02 }} whileTap={{ scale: 0.98 }} className={styles.title}>
                        <Link href='/design'>
                            <a>designer </a>
                        </Link>
                      </motion.div>
                      <motion.div  className={styles.accent} variants={accent}>and</motion.div>
                      <motion.div variants={blurbDown} whileHover={{ color: '#000000', scale: 1.02 }} whileTap={{ scale: 0.98 }} className={styles.title}>
                        <Link href='/development'>
                            <a>developer </a>
                        </Link>
                      </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
        </main>
  
        <footer className={styles.footer}>
  
        </footer>
      </div>
    )
  }
  
  export default Home;