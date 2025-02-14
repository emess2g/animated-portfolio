import { useRef } from 'react'
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [
    {
        id:1,
        title:"React Commerce",
        img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat facilis, itaque a in officia laborum voluptates similique recusandae unde dolorem."
    },
    {
        id:2,
        title:"Music App",
        img: "https://images.unsplash.com/photo-1733077151425-67af89045a9f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat facilis, itaque a in officia laborum voluptates similique recusandae unde dolorem."
    },
    {
        id:3,
        title:"Fittness App",
        img: "https://images.unsplash.com/photo-1733077151425-67af89045a9f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat facilis, itaque a in officia laborum voluptates similique recusandae unde dolorem."
    },
    {
        id:4,
        title:"AirBnb Clone",
        img: "https://images.unsplash.com/photo-1733077151425-67af89045a9f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat facilis, itaque a in officia laborum voluptates similique recusandae unde dolorem."
    }
]

const Single = ({item}) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ["end end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [-100, 100])

     return(
         <section>
            <div className="container">
               <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <motion.h2 >{item.title}</motion.h2>
                    <p>{item.desc}</p>
                    <button>View Project</button>
                </motion.div>
               </div>
            </div>
        </section>)}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping:30
    })

  return (
    <div className='portfolio' ref={ref}>
       <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div> 
      {items.map(item => <Single key={item.id} item={item}/>)}
    </div>
  )
}

export default Portfolio
