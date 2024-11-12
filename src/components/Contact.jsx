import { motion } from "framer-motion"
import Icon from "./Icons"
// import Footer from "./Footer";

let whurl="https://discord.com/api/webhooks/1202454587332632596/tK_XP_TJKqWBf_rTAa8kHs2jTNEgUXf_mqS6BIRfv6brs4osWTNaft6IxkGwCZDmdmvb"

const formSubmit = (e) => {
    e.preventDefault();
    const theName = e.target.name.value
    const theEmail = e.target.email.value
    const theMessage = e.target.message.value
    const honeyPot = e.target._gotcha.value
    const toDiscord = {
        "content": "**Name**: " + theName + "\n**Email**: " + theEmail + "\n**Message**: " + theMessage,
        "username": "WITH2BEES.COM 🌐"
    }
    if(!honeyPot) {
        fetch(whurl + "?wait-true", {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(toDiscord)})
        setTimeout(function() { window.open('/thank-you',"_self")},1000)
    }
}

function Contact() {
    return (
        <motion.div id="contact" className="font-khand text-white text-[1.75rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="hero"
                key="header"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350,  }}
            >
                HAVE AN IDEA FOR A PROJECT?<br />LET&apos;S TALK ABOUT IT!
            </motion.h1>
            <div className="max-w-screen-lg m-auto mt-10 mb-[6rem] px-4">
                No need to stress! We&apos;ve taken the sting out of website development. Simply drop us a line, and we&apos;ll guide you through the process, ensuring your online presence buzzes! <strong className="text-shadow-dark">WITH2BEES</strong>, creating your dream website is a breeze. Contact us today, and let&apos;s get your site up and running!
            </div>
            <div className="max-w-screen-lg m-auto grid grid-cols-[1fr_1fr_auto]">
                <div className="font-khand text-amber-900 text-2xl px-4 col-span-3 md:col-span-2">
                    <form onSubmit={formSubmit}>
                        <input id="name" name="name" type="text" className="px-3 py-3 md:w-[90%] w-full rounded mb-8 shadow-xl" placeholder="name" required />
                        <input id="email" name="email" type="email" className="px-3 py-3 md:w-[90%] w-full rounded mb-8 shadow-xl" placeholder="email" required />
                        <textarea id="message" name="message" rows="4" className="px-3 py-3 md:w-[90%] w-full rounded mb-8 shadow-xl" placeholder="message" required></textarea>
                        <button className="shadow-2xl">SEND YOUR MESSAGE</button>
                        <div className="ohhoney" aria-hidden="true">
                            <input type="text" id="_gotcha" name="_gotcha" tabIndex="-1" autoComplete="off" />
                        </div>
                    </form>
                </div>
                <div className="col-span-3 px-4 mt-10 md:mr-4 md:col-span-1 md:mt-0">
                    <h3 className="text-right font-bold text-yellow-200 text-shadow-dark">ON SOCIAL MEDIA</h3>
                    <div className="flex justify-end"><a target="_blank" rel="noreferrer" href="https://www.facebook.com/with2bees" className="flex justify-end">Facebook <Icon id="facebook" classes="w-5 fill-white ml-2 mb-1" /></a></div>
                    <div className="flex justify-end"><a target="_blank" rel="noreferrer" href="https://twitter.com/With2Bees" className="flex justify-end">Twitter <Icon id="twitter" classes="w-5 fill-white ml-2 mb-1" /></a></div>
                    <div className="flex justify-end"><a target="_blank" rel="noreferrer" href="https://www.instagram.com/robb_with2bees/" className="flex justify-end">Instagram <Icon id="instagram" classes="w-5 fill-white ml-2 mb-1" /></a></div>
                </div>
            </div>
            {/* <Footer /> */}
        </motion.div>
    )
}

export default Contact