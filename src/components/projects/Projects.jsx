
import { useRef } from "react";
import "./projects.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React from 'react';

const items = [	
    {
        id: 1,
        title:"Whatsapp Autopay",
        img:`/chatbot.webp`,
        link:"https://github.com/CrisFunes/autobotpay",
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt laborum veniam dolor expedita omnis odio doloremque laboriosam voluptatibus. Quam incidunt repudiandae aperiam necessitatibus sequi deleniti quasi ad iusto accusantium illo!`
    },
    {
        id: 2,
        title:"Python Metadata",
        link:"https://github.com/CrisFunes/autobotpay",
        img:`https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis vel itaque, aliquam, eius voluptate aut recusandae esse dicta soluta, consequuntur ab. Pariatur temporibus harum accusantium incidunt repellat commodi omnis delectus?`
    },    {
        id: 3,
        title:"AWS Commerce",
        link:"https://github.com/CrisFunes/autobotpay",
        img:`https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
        desc:`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae facilis, autem deserunt fugit dicta ex aut ab eaque suscipit necessitatibus cum distinctio temporibus, dignissimos maxime ad eligendi. Blanditiis, cum explicabo?`
    },    {
        id: 4,
        title:"Bash Commerce",
        link:"https://github.com/CrisFunes/autobotpay",
        img:`https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
        desc:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat animi similique non repudiandae quasi exercitationem molestias tempore soluta. Deserunt, ipsam ullam? Nisi autem harum id, dolore cumque perferendis? Voluptate, minima?`
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