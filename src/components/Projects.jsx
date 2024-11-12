import { Link } from 'react-router-dom'
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
            <div className="max-w-screen-lg m-auto font-khand text-white text-[1.75rem] mt-10 px-4 pb-14">
                <strong className="font-bold text-[26px] uppercase">Welcome to The Hive.</strong> Here, you will find a curated selection of projects that showcase the breadth of our digital craftsmanship. From sleek, user-friendly websites to robust, data-driven applications, we have the skills and expertise to bring your vision to life. This just a taste of what we can do. If you would like to see more of our work, head over to our <Link to="/contact" className="font-bold text-white hover:underline hover:text-white text-[26px]">CONTACT</Link> section and let us know!
            </div>
            <div className="max-w-screen-lg m-auto px-4 mt-10 grid">
                <div id="seeds-of-creativity" className="hive-site-container">
                    <motion.img
                        src="/portfolio_screenshot_seedsofcreativity.png"
                        alt="Screenshot of the SEEDS of Creativity website on a mobile device."
                        className="shrink-0 max-h-[454px] m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="md:ml-16">
                        <div className="hive-site-name">SEEDS OF CREATIVITY</div>
                        <a className="hive-site-link" target="blank" href="https://www.seedsofcreativity.org">https://www.seedsofcreativity.org</a>
                        <div className="hive-site-blurb">
                            An organization dedicated to inspiring and educating children through the power of creative writing. Their program empowers young minds to explore their imaginations, develop their writing skills, and build confidence in their abilities. By fostering creativity and critical thinking at an early age, they help shape the future leaders, artists, and innovators of tomorrow.
                        </div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags">
                            <span>WordPress</span> <span>PHP</span> <span>JavaScript</span> <span>HTML/CSS</span><span>Photoshop</span>
                        </div>
                    </div>
                </div>
                <div id="a1a-dryer-vent-experts" className="hive-site-container">
                    <div className="md:mr-16 order-2 md:order-1">
                        <div className="hive-site-name">A1A DRYER VENT EXPERTS</div>
                        <a className="hive-site-link" target="blank" href="https://a1a.with2bees.dev">https://www.a1adryerventexpert.com</a>
                        <div className="hive-site-blurb">
                            A company based out of Boynton Beach, FL, they remove lint and debris buildup from your dryer vents which helps prevent house fires, reduce energy costs, and extend the life of your dryer. Keeping your dryer vents clean is a lot more important than most people realize and this family owned and operated business really knows their stuff!
                        </div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags"><span>React</span> <span>JavaScript</span> <span>HTML</span> <span>TailwindCSS</span></div>
                    </div>
                    <motion.img
                        src="/portfolio_screenshot_a1a.png"
                        alt="Screenshot of the A1A Dryer Vent Experts website on a mobile device."
                        className="shrink-0 max-h-[454px] order-1 md:order-2 m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div id="giddy-hedgehog" className="hive-site-container">
                    <motion.img
                        src="/portfolio_screenshot_giddyhedgehog.png"
                        alt="Screenshot of the Giddy Hedgehog website on a mobile device."
                        className="shrink-0 max-h-[454px] m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="md:ml-16">
                        <div className="hive-site-name">GIDDY HEDGEHOG</div>
                        <a className="hive-site-link" target="blank" href="https://www.giddyhedgehog.com">https://www.giddyhedgehog.com</a>
                        <div className="hive-site-blurb">With a keen eye for detail and a flair for the creative, she brings unique perspectives to every project. Her work spans a wide range of styles so feel free to explore her portfolio and discover the magic of her art! Also, make sure to check out her thriving Etsy shop for some amazing bespoke creations!</div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags"><span>WordPress</span> <span>PHP</span> <span>JavaScript</span> <span>HTML/CSS</span></div>
                    </div>
                </div>
                <div id="dics" className="hive-site-container">
                    <div className="md:mr-16 order-2 md:order-1">
                        <div className="hive-site-name">D&apos;s Incredible Co-Ed Sports</div>
                        <a className="hive-site-link" target="blank" href="https://dicsleague.com/">https://dicsleague.com</a>
                        <div className="hive-site-blurb">
                            A fun way to stay active and make new friends, this co-ed sports league is great! Every Thursday night they play Ultimate Frisbee and regardless if you&apos;re a seasoned player or a complete beginner, everyone is welcome. It&apos;s a great way to get some exercise and have some laughs. Plus they sell merch!
                        </div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags"><span>WordPress</span> <span>Woocommerce</span> <span>JavaScript</span> <span>HTML/CSS</span></div>
                    </div>
                    <motion.img
                        src="/portfolio_screenshot_dics.png"
                        alt="Screenshot of the DICS website on a mobile device."
                        className="shrink-0 max-h-[454px] order-1 md:order-2 m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div id="kelly-lynn-coaching" className="hive-site-container">
                    <motion.img
                        src="/portfolio_screenshot_klc.png"
                        alt="Screenshot of the Kelly Lynn Coaching website on a mobile device."
                        className="shrink-0 max-h-[454px] m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="md:ml-16">
                        <div className="hive-site-name">Kelly Lynn Coaching</div>
                        <a className="hive-site-link" target="blank" href="https://klc.with2bees.dev">https://www.kellylynncoaching.com</a>
                        <div className="hive-site-blurb">
                            Kelly is a life coach who strives to empower you to cultivate a profound sense of self-love and respect through personalized guidance. Learn to establish healthy boundaries, manage emotions effectively, and infuse every moment of your life with purpose and meaning.
                        </div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags">
                            <span>WordPress</span> <span>PHP</span> <span>JavaScript</span> <span>HTML/CSS</span>
                        </div>
                    </div>
                </div>
                <div id="iloca" className="hive-site-container">
                    <div className="md:mr-16 order-2 md:order-1">
                        <div className="hive-site-name">ILoca Services, Inc.</div>
                        <a className="hive-site-link" target="blank" href="https://www.semitrailers.net">https://www.semitrailers.net</a>
                        <div className="hive-site-blurb">
                            This company sells, rents, and services semi-trailers. They have multiple locations across the midwest and their online ecommerce store does over $1,000,000 in sales each year.
                        </div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags">
                            <span>WordPress</span> <span>Woocommerce</span> <span>PHP</span> <span>JavaScript</span> <span>HTML/CSS</span>
                        </div>
                    </div>
                    <motion.img
                        src="/portfolio_screenshot_iloca.png"
                        alt="Screenshot of the ILoca website on a mobile device."
                        className="shrink-0 max-h-[454px] order-1 md:order-2 m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
                <div id="sti" className="hive-site-container">
                    <motion.img
                        src="/portfolio_screenshot_sti.png"
                        alt="Screenshot of the STI website on a mobile device."
                        className="shrink-0 max-h-[454px] m-auto mb-10 md:mb-0"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                    <div className="md:ml-16">
                        <div className="hive-site-name">Safety Technology International</div>
                        <a className="hive-site-link" target="blank" href="https://www.sti-global.com">https://www.sti-global.com</a>
                        <div className="hive-site-blurb">
                            STI is a manufacturer of specialty fire, safety and security products. Their products help deter false alarms and prevent theft and vandalism of smoke detectors, fire extinguishers and other essential fire and security equipment.
                        </div>
                        <div className="hive-site-sub-header">SKILLS</div>
                        <div className="hive-site-tags">
                            <span>WordPress</span> <span>PHP</span> <span>JavaScript</span> <span>HTML/CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Hive