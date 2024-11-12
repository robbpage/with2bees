import { motion } from "framer-motion"

function FourOhFour() {
    return (
        <motion.div id="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="hero"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >
                404. THIS IS EMBARASSING.
            </motion.h1>
            <div className="max-w-screen-lg m-auto flex flex-col">
                <p className="font-khand text-white/85 text-[1.75rem] mt-24 px-4 pb-10">
                    Oops, we can&apos;t seem to locate the page you requested! Click something up top to help get you back on the right track. Sorry for the hassle.
                </p>
                <img src="fish.png" className="md:w-[50%] m-auto mt-10" />
            </div>
        </motion.div>
    )
}

export default FourOhFour