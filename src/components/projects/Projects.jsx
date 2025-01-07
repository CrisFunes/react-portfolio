
import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from 'react';

const items = [	
    {
        id: 1,
        title:"ProTrack Dashboard",
        img:`https://crisfunes.github.io/react-portfolio/assets/dashboard-preview.png`,
        link:"https://github.com/CrisFunes/protrack",
        desc:`ProTrack is a comprehensive project management dashboard that integrates with popular development tools like Jira, Trello, GitHub, and Bitbucket. It provides a centralized view of your project's progress, tasks, and development activities in real-time.`
    },
    {
        id: 2,
        title:"Portfolio Web",
        img:`https://crisfunes.github.io/react-portfolio/assets/portfolio.png`,
        link:"https://github.com/CrisFunes/react-portfolio",
        desc:`Responsive web application built with React.js, designed to deliver an engaging and interactive user experience. The project leverages modern CSS techniques for a clean and adaptable design, ensuring compatibility across devices. Its component-based architecture promotes reusability and scalability, while animations and intuitive navigation enhance usability.`
    }, 
    

];

const Single = ({item}) => {
    
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

    return (
        <section >
            <div className="container" id="Projects">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.link}>
                            <button>See Project</button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Projects = () => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 19
    });


  return (
    <div className="projects" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (<Single key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Projects