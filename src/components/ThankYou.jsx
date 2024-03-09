import { motion } from "framer-motion"

function ThankYou() {
    return (
        <div id="error">
            <motion.h1
                className="hero"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >
                MESSAGE SENT
            </motion.h1>
            <div className="max-w-screen-lg m-auto flex flex-col">
                <p className="font-khand text-white/85 text-[1.75rem] mt-24 px-4 pb-10">
                    Thank you for reaching out. We will review your message and respond as quickly as possible.
                </p>
            </div>
        </div>
    )
}

export default ThankYou