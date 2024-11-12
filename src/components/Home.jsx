import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import Icon from "./Icons"
import bee from "../assets/bee.svg"
// import Footer from "./Footer"

const variants = {
    hidden: { opacity: 0, y: -100 },
    hidden2: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
}

let whurl="https://discord.com/api/webhooks/1202454587332632596/tK_XP_TJKqWBf_rTAa8kHs2jTNEgUXf_mqS6BIRfv6brs4osWTNaft6IxkGwCZDmdmvb"

const formSubmit = (e) => {
    e.preventDefault();
    const theName = e.target.name.value
    const theEmail = e.target.email.value
    const theMessage = e.target.message.value
    const honeyPot = e.target._gotcha.value
    const toDiscord = {
        "content": "\n**Name**: " + theName + "\n**Email**: " + theEmail + "\n**Message**: " + theMessage,
        "username": "WITH2BEES.COM 🌐"
    }
    if(!honeyPot) {
        fetch(whurl + "?wait-true", {"method": "POST", "headers": {"content-type": "application/json"}, "body": JSON.stringify(toDiscord)})
        setTimeout(function() { window.open('/thank-you',"_self")},1000)
    }
}
function Home() {
    return (
        <motion.div id="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="font-khand font-bold text-[50px] md:text-[60px] text-center leading-[60px] p-[50px] text-shadow-dark"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >JOIN FORCES WITH2BEES AND <br className="hidden sm:block" />USE OUR HIVE OF KNOWLEDGE!</motion.h1>
            <div className="max-w-screen-lg m-auto flex flex-col">
                <p className="font-khand text-white text-[1.75rem] mt-10 px-4 pb-10">
                    <strong className="uppercase text-shadow-dark">With2Bees</strong> is your premier partner for exceptional website design. Our team of skilled professionals is dedicated to crafting sophisticated online solutions tailored to elevate your brand. Our approach is rooted in a combination of creativity, technical expertise, and a deep understanding of how to craft quality user experiences.
                </p>
            </div>

            <motion.div
                className="max-w-screen-lg m-auto mt-4 mb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 font-khand font-bold text-center text-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.15 }}>
                <motion.div variants={variants} className="flex flex-col gap-4 items-center p-10 cursor-pointer">
                    <Icon id="mobile" classes="w-8 fill-white" />
                    <span className="block -mb-4 -mt-2 font-khand font-bold text-2xl text-amber-900">MOBILE FIRST</span>
                    <span className="text-shadow-dark">Our sites are designed with a mobile first mentality but they look/work great across all devices.</span>
                </motion.div>
                <motion.div variants={variants} className="flex flex-col gap-4 items-center p-10 cursor-pointer">
                    <Icon id="design" classes="w-11 fill-white" />
                    <span className="block -mb-4 -mt-2 font-khand font-bold text-2xl text-amber-900">TOP NOTCH DESIGN</span>
                    <span className="text-shadow-dark">Our sites don&apos;t just work great, they also look great too! Function and form blend seamlessly.</span>
                </motion.div>
                <motion.div variants={variants} className="flex flex-col gap-4 items-center p-10 cursor-pointer">
                    <Icon id="seo" classes="w-10 fill-white" />
                    <span className="block -mb-4 -mt-2 font-khand font-bold text-2xl text-amber-900">SEO READY</span>
                    <span className="text-shadow-dark">All our sites are built with SEO in mind using best practices for layout, typography, etc.</span>
                </motion.div>
                <motion.div variants={variants} className="flex flex-col gap-4 items-center p-10 cursor-pointer">
                    <Icon id="fast" classes="w-11 md:w-9 fill-white" />
                    <span className="block -mb-4 -mt-2 font-khand font-bold text-2xl text-amber-900">FAST</span>
                    <span className="text-shadow-dark">Nobody likes to wait. Our sites load and perform fast, so your customers are never waiting.</span>
                </motion.div>
                <motion.div variants={variants} className="flex flex-col gap-4 items-center p-10 cursor-pointer">
                    <Icon id="secure" classes="w-8 fill-white" />
                    <span className="block -mb-4 -mt-2 font-khand font-bold text-2xl text-amber-900">SECURE</span>
                    <span className="text-shadow-dark">All our sites are built with security in mind. From daily back-ups to updates, we have you covered!</span>
                </motion.div>
                <motion.div variants={variants} className="flex flex-col gap-4 items-center p-10 cursor-pointer">
                    <Icon id="customizable" classes="w-9 fill-white" />
                    <span className="block -mb-4 -mt-2 font-khand font-bold text-2xl text-amber-900">CUSTOMIZABLE</span>
                    <span className="text-shadow-dark">We set it up so you have control over your website content and won&apos;t need another developer.</span>
                </motion.div>
            </motion.div>

            <div className="max-w-screen-md m-auto px-4 hidden">
                <div className="bg-white rounded-xl shadow-2xl p-14 mb-10 font-ubuntu text-black text-xl relative">
                    <Icon id="hexagons-solid" classes="fill-white w-20 absolute top-[-30px] left-[-30px]" />
                    Testimonial quote will go here Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, adipisci.
                </div>
            </div>

            <div className="bg-black/30 p-10 md:p-32 font-khand text-[2rem] text-yellow-200 text-center leading-8 text-shadow-dark">
                <p className="text-yellow-200">DISCOVER THE PERFECT BLEND OF FORM AND FUNCTION <strong>WITH2BEES</strong></p>
                <p className="font-khand text-[2.5rem] text-white font-bold uppercase">where your digital success is our top priority</p>
                <p className="text-white text-2xl mt-14 max-w-screen-lg m-auto">
                    <span className="text-yellow-300 text-4xl block mb-2 font-bold px-10">Having a website is <span className="underline">CRUCIAL</span> for any business.</span>
                    You <strong>GREATLY</strong> increase your chance of success by having a website for your business. <strong>It really is that simple</strong>. A strong social media presence is important, <strong>but it&apos;s not enough.</strong> We help ensure that your website doesn&apos;t just <em>exist</em> but that it also looks/works great and generates <strong>BUZZ</strong> for your business!
                    <span className="font-bold block mt-10 text-4xl text-yellow-200">CONTACT US TODAY</span>
                    <span className="font-bold text-5xl block mt-2 mb-2"><Link to="tel:5617557522">(561)755-7622</Link></span>
                    <span className="flex justify-center gap-5 pb-10">
                        <a href="https://www.facebook.com/with2bees" target="_blank" rel="noreferrer">
                            <Icon id="facebook" classes="w-8 fill-white cursor-pointer transition hover:scale-[1.25]" />
                        </a>
                        <a href="https://www.twitter.com/with2bees" target="_blank" rel="noreferrer">
                            <Icon id="twitter" classes="w-8 fill-white cursor-pointer transition hover:scale-[1.25]" />
                        </a>
                        <a href="https://www.instagram.com/robb_with2bees/" target="_blank" rel="noreferrer">
                            <Icon id="instagram" classes="w-8 fill-white cursor-pointer transition hover:scale-[1.25]" />
                        </a>
                    </span>
                    <span className="mb-10 block lg:mb-0">...and find out how <strong>easy</strong> and <strong>affordable</strong> it is to get your business website up and running!</span>
                </p>
            </div>

            <motion.div
                className="max-w-screen-lg m-auto -mt-10 text-black grid sm:grid-cols-2 md:grid-cols-3 gap-4"
                initial="hidden2"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.15 }}>
                <motion.div variants={variants} className="bg-white rounded-xl p-6 font-khand text-2xl font-bold text-[#f47e05] shadow-lg mx-10 sm:ml-4 sm:mr-0 md:ml-4 md:mr-0">
                    <span className="text-[#f47e05] font-bold">
                        <Icon id="hexagons-empty" classes="w-5 fill-[#f47e05] inline mb-1 mr-1" />
                        BASIC PACKAGE
                    </span>
                    <span className="text-[2em] text-[#3CA5FB] block mt-1">$750</span>
                    <ul className="text-amber-900 font-normal mt-5 text-xl">
                        <li className="list-disc ml-4">Responsive design</li>
                        <li className="list-disc ml-4">Home page</li>
                        <li className="list-disc ml-4">About Us page</li>
                        <li className="list-disc ml-4">Contact form</li>
                        <li className="list-disc ml-4">Blog or news section</li>
                        <li className="list-disc ml-4">Image gallery/portfolio</li>
                        <li className="list-disc ml-4">Basic SEO optimization</li>
                        <li className="list-disc ml-4">Social media integration</li>
                    </ul>
                </motion.div>
                <motion.div variants={variants} className="bg-white rounded-xl p-6 font-khand text-2xl font-bold text-[#f47e05] shadow-lg mx-10 sm:mr-4 sm:ml-0 md:mr-0 md:ml-0">
                    <span className="text-[#f47e05] font-bold">
                        <Icon id="hexagons-half" classes="w-5 fill-[#f47e05] inline mb-1 mr-1 rotate-180" />
                        E-COMMERCE PACKAGE
                    </span>
                    <span className="text-[2em] text-[#3CA5FB] block mt-1">$1250</span>
                    <ul className="text-amber-900 font-normal mt-5 text-xl">
                        <li className="list-disc ml-4 font-bold">Everything from the Basic Site</li>
                        <li className="list-disc ml-4">Additional pages (up to 5)</li>
                        <li className="list-disc ml-4">Product pages and catalog*</li>
                        <li className="list-disc ml-4">Shopping cart functionality</li>
                        <li className="list-disc ml-4">Secure payment gateway</li>
                        <li className="list-disc ml-4">Order management system</li>
                        <li className="list-disc ml-4">Content Management System</li>
                    </ul>
                </motion.div>
                <motion.div variants={variants} className="bg-white rounded-xl p-6 font-khand text-2xl font-bold text-[#f47e05] shadow-lg mx-10 sm:ml-4 sm:mr-4 sm:col-span-2 md:ml-0 md:mr-4 md:col-span-1">
                    <span className="text-[#f47e05] font-bold">
                        <Icon id="hexagons-solid" classes="w-5 fill-[#f47e05] inline mb-1 mr-1 rotate-180" />
                        CUSTOM QUOTE
                    </span>
                    <span className="text-[2em] text-[#3CA5FB] block mt-1">$<span className="blur-md">W2BEES</span></span>
                    <ul className="text-amber-900 font-normal mt-5 text-xl">Sometimes you just need more customization. We totally get it. We&apos;ll work with you so your vision aligns with our creative expertise. Resulting in a website that looks stunning and functions flawlessly, providing an exceptional user experience.</ul>
                </motion.div>
            </motion.div>
            <h3 className="max-w-screen-lg m-auto mt-24 px-4 font-khand font-bold text-6xl text-left text-yellow-200">
                EASY AND HASSLE FREE PRICING.
            </h3>
            <div className="max-w-screen-lg m-auto mt-8 px-4 font-khand text-[1.75rem] text-white">
                Our comprehensive suite of services spans from responsive web design and user interface optimization to e-commerce solutions and content management systems. Whether you&apos;re a small startup looking to establish your online presence or a well-established enterprise aiming to refresh your digital footprint, <strong className="uppercase text-shadow-dark text-white">With2Bees</strong> has the expertise to guide you every step of the way.
                <p className="block font-khand text-3xl text-amber-900 font-bold text-center md:text-left mt-10">
                    For more information and options please visit our <Link to="/pricing" className="font-bold text-amber-800 hover:underline hover:text-amber-800 text-[28px]">PRICING</Link> page.<br /><br />
                    Visit <Link to="/projects" className="font-bold text-amber-800 hover:underline hover:text-amber-800">THE HIVE</Link> to see some of the projects we&apos;ve helped bring to life!
                </p>
            </div>

            <div className="max-w-screen-lg m-auto mt-40">
                <h3 className="font-khand text-6xl text-left font-bold px-4 pb-10 text-yellow-200 text-sh">
                    ANY QUESTIONS? <br className="md:hidden" />LET&apos;S TALK!
                </h3>
                
                <div className="grid grid-cols-3">
                    <div className="font-khand text-amber-900 text-2xl px-4 col-span-3 md:col-span-2">
                        <form onSubmit={formSubmit}>
                            <input id="name" name="name" type="text" className="px-3 py-3 md:w-[90%] w-full rounded mb-8 shadow-xl" placeholder="name" required />
                            <input id="email" name="email" type="email" className="px-3 py-3 md:w-[90%] w-full rounded mb-8 shadow-xl" placeholder="email" required />
                            <textarea id="message" name="message" rows="4" className="px-3 py-3 md:w-[90%] w-full rounded mb-8 shadow-xl" placeholder="message" required></textarea>
                            <button className="shadow-xl">SEND YOUR MESSAGE</button>
                            <div className="ohhoney" aria-hidden="true">
                                <input type="text" id="_gotcha" name="_gotcha" tabIndex="-1" autoComplete="off" />
                            </div>
                        </form>
                    </div>
                    
                    <div className="relative">
                        <div id="bee-one" className="absolute hidden md:block top-[0px] right-[220px] -z-100 blur-sm scale-[0.65] opacity-70">
                            <img className="w-[150px] animate-beeBounce1" src={bee} />
                            <div className="bee-shadow animate-beeShadow1"></div>
                        </div>
                        <motion.div
                            id="bee-two"
                            className="absolute hidden md:block top-[40px] right-[0px] scale-x-[-1]"
                            initial={{ right: "-200px" }}
                            whileInView={{ right: 0 }}>
                            <img className="w-[250px] animate-beeBounce2" src={bee} />
                            <div className="bee-shadow bigger animate-beeShadow2"></div>
                        </motion.div>
                    </div>
                </div>                
            </div>
            {/* <Footer /> */}
        </motion.div>
    )
}

export default Home