import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Icon from "./Icons"

const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
}

function Pricing() {
    return (
        <motion.div id="pricing" className="font-khand text-white text-[1.75rem]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="hero"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >
                STRAIGHT FORWARD<br />HASSLE FREE PRICING
            </motion.h1>
            <div className="max-w-screen-lg m-auto mt-10 px-4">
                <p>With transparent pricing and a commitment to delivering exceptional value, <strong className="text-shadow-dark">WITH2BEES</strong> is here to make your journey into the digital world both cost-effective and stress-free. Embrace the simplicity, explore the possibilities, and let&apos;s create a site that stands out in the digital landscape!</p>
            </div>
            <motion.div
                className="max-w-screen-lg m-auto px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                exit="hidden"
                transition={{ staggerChildren: 0.15 }}
            >
                <motion.div variants={variants} className="shadow-lg mt-20 grid font-khand text-2xl text-amber-900 sm:grid-cols-[284px_1fr]">
                    <div className="p-6 bg-white rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl">
                        <span className="text-[#f47e05] font-bold">
                            <Icon id="hexagons-empty" classes="w-5 fill-[#f47e05] inline mb-1 mr-1" />
                            BASIC PACKAGE
                        </span>
                        <span className="text-[2em] text-[#3CA5FB]  block mt-1 font-bold">$750</span>
                        <ul className="text-amber-900 mt-5 text-xl">
                            <li className="list-disc ml-4">Responsive design</li>
                            <li className="list-disc ml-4">Home page</li>
                            <li className="list-disc ml-4">About Us page</li>
                            <li className="list-disc ml-4">Contact form</li>
                            <li className="list-disc ml-4">Blog or news section</li>
                            <li className="list-disc ml-4">Image gallery/portfolio</li>
                            <li className="list-disc ml-4">Basic SEO optimization</li>
                            <li className="list-disc ml-4">Social media integration</li>
                        </ul>
                    </div>
                    <div className="text-white p-6 bg-black/30 rounded-b-xl text-shadow-dark sm:rounded-b-none sm:rounded-tr-xl sm:rounded-br-xl">
                    Our <strong>Basic Package</strong> is anything but basic; it&apos;s full of essential features meticulously curated to craft a website that not only looks sleek but also functions seamlessly. From user-friendly interfaces to responsive designs. We&apos;ve sweetened the deal by adding a blog/news feature - at no additional charge.<br /><br />
                    This tier is where simplicity meets sophistication - an opportunity for your unique voice to resonate in the digital realm. With an array of tools at your fingertips it is designed to empower your venture, providing the foundational elements needed to thrive online.
                    </div>
                </motion.div>
                <motion.div variants={variants} className="shadow-lg mt-10 grid font-khand text-2xl text-amber-900 sm:grid-cols-[auto_1fr]">
                    <div className="p-6 bg-white rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl">
                        <span className="text-[#f47e05] font-bold">
                            <Icon id="hexagons-half" classes="w-5 fill-[#f47e05] inline mb-1 mr-1 rotate-180" />
                            E-COMMERCE PACKAGE
                        </span>
                        <span className="text-[2em] text-[#3CA5FB] block mt-1 font-bold">$1250</span>
                        <ul className="text-amber-900 mt-5 text-xl">
                        <li className="list-disc ml-4 font-bold">Everything from the Basic Site</li>
                        <li className="list-disc ml-4">Additional pages (up to 5)</li>
                        <li className="list-disc ml-4">Product pages and catalog*</li>
                        <li className="list-disc ml-4">Shopping cart functionality</li>
                        <li className="list-disc ml-4">Secure payment gateway</li>
                        <li className="list-disc ml-4">Order management system</li>
                        <li className="list-disc ml-4">Content Management System</li>
                        </ul>
                    </div>
                    <div className="text-white p-6 bg-black/30 rounded-b-xl text-shadow-dark sm:rounded-b-none sm:rounded-tr-xl sm:rounded-br-xl">
                        An ideal fit for entrepreneurs and businesses seeking to thrive in the world of digital selling. Dive deep into a pool of opportunities as you unlock a treasure trove of powerful tools and functionalities crafted specifically to enhance your online store. You&apos;ll get everything from the Basic Package as well as some powerful additional features.<br /><br />
                        Our <strong>E-commerce Package</strong> isn&apos;t just a solution; it is a dynamic catalyst for success. Even if you don&apos;t intend to sell anything online you can still use the Content Management System to have an online catalog/brochure to enhance your presence.
                    </div>
                </motion.div>
                <motion.div variants={variants} className="shadow-lg mt-10 grid font-khand text-2xl text-amber-900 sm:grid-cols-[284px_1fr]">
                    <div className="p-6 bg-white rounded-t-xl sm:rounded-t-none sm:rounded-tl-xl sm:rounded-bl-xl">
                        <span className="text-[#f47e05] font-bold">
                            <Icon id="hexagons-solid" classes="w-5 fill-[#f47e05] inline mb-1 mr-1 rotate-180" />
                            CUSTOM QUOTE
                        </span>
                        <span className="text-[2em] text-[#3CA5FB] block mt-1 font-bold">$<span className="blur-md">W2BEES</span></span>
                        <span className="text-amber-900 block mt-5 text-xl">Sometimes a &quot;package&quot; just doesn&apos;t fit. We get it.</span>
                    </div>
                    <div className="text-white p-6 bg-black/30 rounded-b-xl text-shadow-dark sm:rounded-b-none sm:rounded-tr-xl sm:rounded-br-xl">
                        We recognize that each project resonates with its own distinct rhythm. For those whose ambitions and aspirations extend beyond the boundaries of predefined packages, our <strong>Custom Quote</strong> option stands as an open invitation. This is where your vision takes center stage, and our expert team becomes your creative ally.<br /><br />
                        Your dream, your rules - let&apos;s turn your bespoke vision into a buzzing reality.
                    </div>
                </motion.div>
            </motion.div>
            <div className="max-w-screen-lg m-auto px-3">
                <h3 className="mt-24 font-khand font-bold text-6xl text-left text-yellow-200">NEED A WEB HOST FOR YOUR SITE?</h3>
                <p className="my-4">
                    We&apos;ve got your back. We&apos;ve got a bunch of hosting options, making it super easy to find the right fit. Already have your own hosting? Great! When your site is good to go, we&apos;ll handle the file transfer. We&apos;ll chat about all these details as we go over your project. 
                </p>
                <p className="text-amber-900 font-bold ">
                    <Icon id="hosting" classes="fill-amber-900 w-7 inline mb-1" /> Hosting plans start as low as $1.99/month!
                </p>
                <h3 className="mt-24 font-khand font-bold text-6xl text-left text-yellow-200">NO WORRIES, WE&apos;RE HERE TO HELP!</h3>
                <p className="my-4">As you navigate the dynamic world of web presence, <strong className="text-shadow-dark">WITH2BEES</strong> invites you to elevate your digital journey with confidence and flair. Innovation, design, and functionality converge seamlessly making <strong className="text-shadow-dark">WITH2BEES</strong> not just a service; but a <em>partner</em> in crafting a digital narrative that resonates uniquely with your goals. Don&apos;t just exist online - <strong>thrive, captivate, and succeed.</strong></p>
                <p className="text-amber-900 font-bold">
                    Head over to our <Link to="/contact" className="font-bold text-amber-800 hover:underline hover:text-amber-800 text-[28px]">CONTACT</Link> page and join the hive.<br />Unleash your digital potential today! 🐝
                </p>
            </div>
        </motion.div>
    )
}

export default Pricing