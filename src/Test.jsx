import {motion, spring} from "framer-motion"
import { useState } from "react"

const Test = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        hidden: { opacity: 0, rotate: 0, x: 0, y: 0 },
        visible: { opacity: 1, rotate: 360, x: [0, 100, 0], y: [0, 0, -100, 0] },
    }

  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        transition={{ duration: 4 }}
      ></motion.div>
      <button onClick={() => setOpen(prev => !prev)}>Click</button>
    </div>
  )
}

export default Test