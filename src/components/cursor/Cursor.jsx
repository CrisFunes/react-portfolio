import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./cursor.scss"

const Cursor = () => {
const [position,setPosition] = useState({x:0,y:0})

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3559927744.
useEffect (() => {
    const mouseMuve = (e) => {
        setPosition({x:e.clientX, y:e.clientY})
    }
    window.addEventListener("mousemove", mouseMuve)
    return () => {
        window.removeEventListener("mousemove", mouseMuve)
    }
}, [])
  return (
    <motion.div className="cursor" animate={{x: position.x-10, y: position.y-10}}></motion.div>
  )
}

export default Cursor