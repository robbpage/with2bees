import { Routes, Route, NavLink, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Pricing from "./components/Pricing"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Blog from "./components/Blog"
import Privacy from "./components/Privacy"
import Terms from "./components/Terms"
import ThankYou from "./components/ThankYou"
import FourOhFour from "./components/FourOhFour"
import Icon from "./components/Icons"
import bee from "./assets/bee.svg"

function App() {
    const location = useLocation()
    return (
    <>
        <div className="gradient"></div>
        <nav className="nav-shell text-[1.35rem] sm:text-3xl">
            <NavLink className="nav-item" to="/"><Icon id="bee" classes="w-8 sm:w-9 fill-amber-900" />HOME</NavLink>
            <NavLink className="nav-item" to="/pricing"><Icon id="about" classes="w-5 sm:w-6 fill-amber-900" />PRICING</NavLink>
            <NavLink className="nav-item" to="/projects"><Icon id="projects" classes="w-6 sm:w-7 fill-amber-900" />THE HIVE</NavLink>
            <NavLink className="nav-item" to="/contact"><Icon id="contact" classes="w-5 sm:w-6 fill-amber-900" />CONTACT</NavLink>
        </nav>
        <div className="max-w-screen-lg m-auto relative">
            <div className="absolute inset-0 pointer-events-none">
                <div id="bee-one" className="absolute top-[-80px] lg:top-[0px] z-50">
                    <img className="w-[150px] animate-beeBounce1 scale-50 sm:scale-[75%] lg:scale-100 lg:mt-20" src={bee} />
                    <div className="bee-shadow animate-beeShadow1 hidden lg:block"></div>
                </div>
                <div id="bee-two" className="absolute right-0 -scale-x-100 top-[-80px] lg:top-[0px] z-50">
                    <img className="w-[150px] animate-beeBounce2 scale-50 sm:scale-[75%] lg:scale-100" src={bee} />
                    <div className="bee-shadow animate-beeShadow2 hidden lg:block"></div>
                </div>
            </div>
        </div>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={ <Home /> } />
                <Route path="/pricing" element={ <Pricing /> } />
                <Route path="/projects" element={ <Projects /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/blog" element={ <Blog /> } />
                <Route path="/privacy-policy" element={ <Privacy /> } />
                <Route path="/terms-and-conditions" element={ <Terms /> } />
                <Route path="/thank-you" element={ <ThankYou /> } />
                <Route path="*" element={ <FourOhFour /> } />
            </Routes>
            <Footer />
        </AnimatePresence>
    </>
    )
}

export default App