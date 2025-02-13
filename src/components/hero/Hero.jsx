import { s } from 'framer-motion/client'
import './hero.scss'
import { motion } from 'framer-motion'


const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5
    }
  },
  scrollButton: {
    opacity: 0,
    y: 0,
    transition: {
      repeat: Infinity,
      duration: 2
    } 
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%" ,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20
    }
  },

};

const Hero = () => {
  return (
    <div className='hero'>
       <motion.div className="wrapper" variants={textVariants} initial="initial" animate="animate">
        <motion.div className="textContainer" variants={textVariants}>
          <motion.h2 variants={textVariants}>ESSUON EMMANUEL</motion.h2>
          <motion.h1 variants={textVariants}>Web Developer & Ui Designer </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
           <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
        </motion.div>
       </motion.div> 
       <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate"> 
        Writer Content Creator Web Developer
        </motion.div> 
       <div className="imgContainer">
        <img src="/hero.png" alt="" />
       </div>
    </div>
  )
}

export default Hero