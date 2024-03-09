import { motion } from "framer-motion"

function Hive() {
    return (
        <motion.div id="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="hero"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >
                STEP INTO OUR DIGITAL HIVE<br />AND SEE WHAT WE CAN DO!
            </motion.h1>
            <div className="max-w-screen-lg m-auto px-4 mt-10 mb-60 font-khand text-2xl text-center">
                Coming soon. Buzzzzzzz.
            </div>
        </motion.div>
    )
}

export default Hive