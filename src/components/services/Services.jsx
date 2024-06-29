import { useRef } from 'react'
import './services.scss'
import {useInView, motion} from "framer-motion"

const variant = {
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            straggerChildren:0.1,
        },
    }
}

const Services = () => {
    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})


  return (
    <motion.div 
    className='services' 
    variants={variant} 
    initial="initial" 
    ref={ref}
    animate={isInView && "animate"}
    >
        <motion.div className='textContainer' variants={variant} >
            <p>
                focus on helping your brand grow
                <br /> and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className='titleContainer'variants={variant} >
            <div className="title">
                <img src='/people.webp' alt='' />
                <h1>
                    <motion.b whileHover={{color: "orange" }}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color: "orange" }}>For Your</motion.b> Business.
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variant} >
            <motion.div className="box"
            whileHover={{ background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>In a galaxy far beyond the Milky Way, thirty worlds orbit a giant blue star.
                     Each planet, unique in its own way, contributes to a cosmic symphony of 
                     diversity and wonder. The largest, Zenthara, is a gas giant with swirling 
                     storms of neon hues. Aridonia boasts vast deserts of crystal sands. 
                     Lush with forests and waterfalls, Verdantia is a sanctuary of life. 
                     Icelara, perpetually frozen, glimmers with ethereal ice structures. 
                     The oceans of Aquastria hide secrets of ancient civilizations.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"
            whileHover={{ background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>In a galaxy far beyond the Milky Way, thirty worlds orbit a giant blue star.
                     Each planet, unique in its own way, contributes to a cosmic symphony of 
                     diversity and wonder. The largest, Zenthara, is a gas giant with swirling 
                     storms of neon hues. Aridonia boasts vast deserts of crystal sands. 
                     Lush with forests and waterfalls, Verdantia is a sanctuary of life. 
                     Icelara, perpetually frozen, glimmers with ethereal ice structures. 
                     The oceans of Aquastria hide secrets of ancient civilizations.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"
            whileHover={{ background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>In a galaxy far beyond the Milky Way, thirty worlds orbit a giant blue star.
                     Each planet, unique in its own way, contributes to a cosmic symphony of 
                     diversity and wonder. The largest, Zenthara, is a gas giant with swirling 
                     storms of neon hues. Aridonia boasts vast deserts of crystal sands. 
                     Lush with forests and waterfalls, Verdantia is a sanctuary of life. 
                     Icelara, perpetually frozen, glimmers with ethereal ice structures. 
                     The oceans of Aquastria hide secrets of ancient civilizations.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"
            whileHover={{ background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>In a galaxy far beyond the Milky Way, thirty worlds orbit a giant blue star.
                     Each planet, unique in its own way, contributes to a cosmic symphony of 
                     diversity and wonder. The largest, Zenthara, is a gas giant with swirling 
                     storms of neon hues. Aridonia boasts vast deserts of crystal sands. 
                     Lush with forests and waterfalls, Verdantia is a sanctuary of life. 
                     Icelara, perpetually frozen, glimmers with ethereal ice structures. 
                     The oceans of Aquastria hide secrets of ancient civilizations.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services