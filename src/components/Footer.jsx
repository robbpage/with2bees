import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "./Icons"
import bee from "../assets/bee.svg"

function Footer() {
    return ( 
        <motion.footer
            className="bg-black/50 mt-[150px] pt-16 text-lg md:h-[410px]"
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.1 }}
        >
            <div className="max-w-screen-lg m-auto pt-5 px-8 font-khand text-xl grid-cols-6 sm:text-2xl grid sm:grid-cols-[200px_1fr_auto]">
                <div className="flex relative justify-center col-span-6 sm:col-span-1">
                    <div className="text-5xl font-bold" style={{ textShadow: "1px 1px 30px rgba(0,0,0,0.75)" }}>WITH</div>
                    <div className="logo-two text-8xl font-bold -mt-[24px] text-yellow-200">2</div>
                    <div className="text-5xl font-bold" style={{ textShadow: "1px 1px 30px rgba(0,0,0,0.75)" }}>BEES</div>
                    <div id="bee-one" className="absolute -z-100 scale-[0.25] top-[-110px] left-[10%] sm:top-[-110px] sm:left-[-30px]">
                        <img className="w-[150px] animate-beeBounce1" src={bee} />
                    </div>
                    <div id="bee-one" className="absolute -z-100 scale-x-[-0.25] scale-[0.25] top-[-110px] right-[10%] sm:right-[-30px] sm:top-[-110px]">
                        <img className="w-[150px] animate-beeBounce2" src={bee} />
                    </div>
                </div>
                <div className="text-right mr-0 col-span-2 mt-6 sm:col-span-1 sm:mr-20 sm:mt-0">
                    <span className="font-bold block text-yellow-200 text-shadow-dark">NAVIGATION</span>
                    <div className="flex justify-end"><Link to="/" className="flex justify-end">Home<Icon id="home" classes="w-5 fill-white ml-2 mb-1 inline" /></Link></div>
                    <div className="flex justify-end"><Link to="/pricing" className="flex justify-end">Pricing<Icon id="about" classes="w-6 fill-white ml-1 mb-1 pl-1" /></Link></div>
                    <div className="flex justify-end"><Link to="/projects" className="flex justify-end">The Hive<Icon id="projects" classes="w-5 fill-white ml-2 mb-1" /></Link></div>
                    <div className="flex justify-end"><Link to="/contact" className="flex justify-end footer-mo">Contact<Icon id="contact" classes="w-5 fill-white ml-2 mb-1" /></Link></div>
                </div>
                <div className="text-right mr-10 mt-6 col-span-4 sm:col-span-1 sm:mr-0 sm:mt-0">
                    <span className="font-bold block text-yellow-200 text-shadow-dark">SOCIAL MEDIA</span>
                    <div className="flex justify-end">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/with2bees" className="flex justify-end">Facebook <Icon id="facebook" classes="w-5 fill-white ml-2 mb-1" /></a>
                    </div>
                    <div className="flex justify-end">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/With2Bees" className="flex justify-end">Twitter <Icon id="twitter" classes="w-5 fill-white ml-2 mb-1" /></a>
                    </div>
                    <div className="flex justify-end">
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/robb_with2bees/" className="flex justify-end">Instagram <Icon id="instagram" classes="w-5 fill-white ml-2 mb-1" /></a>
                    </div>
                    <div className="flex justify-end">
                        <Link to="/blog" className="flex justify-end">Blog <Icon id="hexagons-solid" classes="w-5 fill-white ml-2 mb-1" /></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-lg m-auto mt-14 py-10 px-2 border-black/25 border-t-[1px] text-center sm:text-left">
                © { new Date().getFullYear() } <strong className="text-shadow-dark">WITH2BEES</strong> All rights reserved <br className="sm:hidden" />
                <span className="text-black/25 px-2 hidden sm:inline">|</span> <Link to="/privacy-policy">Privacy Policy</Link> <span className="text-black/25 px-2">|</span> <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </div>
        </motion.footer>
     )
}

export default Footer