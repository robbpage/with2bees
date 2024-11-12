import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import axios from "axios"

export default function Blogs() {
    const [posts, setPosts] = useState([])
    const fetchPosts  = () => { axios.get('https://blog.with2bees.com/wp-json/wp/v2/posts?_embed&per_page=1').then((res) => { setPosts(res.data) }) }
    function getAdate(when) {
        const thedate = new Date(when);
        return(thedate.toLocaleString('default', { weekday: 'long' }) + ", " + thedate.toLocaleString('default', { month: 'long' }) + " " + thedate.toLocaleString('default',{ day : 'numeric' }) + " " + thedate.getFullYear())
    }
    
    useEffect(() => { fetchPosts() },[])

    return (
        <motion.div id="blog" initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }} exit={{ opacity: 0, y: -100 }}>
            {posts.map((item) => (
                <div key={item.id} className="max-w-screen-md m-auto shadow-xl bg-white rounded-xl pb-10">
                    <div className="relative">
                        {item._embedded["wp:featuredmedia"] ? (<img className="rounded-t-xl shadow-xl" key={Math.random()*1001|0} src={item._embedded["wp:featuredmedia"][0].source_url} />) : null}
                        <div className="bg-black/50 absolute bottom-0 w-full">
                            <h1 className="font-khand font-bold text-5xl leading-[55px] text-white text-center uppercase py-5" key={Math.random()*1001|0}>
                                { item.title.rendered }
                            </h1>
                        </div>
                    </div>
                    <h5 className="text-amber-900 text-lg text-center mt-4 uppercase font-khand" key={Math.random()*1001|0}>posted by &nbsp;<strong className="text-black">{ item._embedded.author[0].name }</strong>&nbsp; on &nbsp;<strong className="text-black">{getAdate(item.date)}</strong></h5>
                    <div className="blog px-10 pt-4 text-lg text-black font-khand rounded-b-xl" key={Math.random()*1001|0} dangerouslySetInnerHTML={{ __html: item.content.rendered }}></div>
                </div>
            ))}
            <div className="max-w-screen-md m-auto text-center mt-10 mb-[-100px]"><Link to="https://blog.with2bees.com">VISIT BLOG.WITH2BEES FOR MORE</Link></div>
        </motion.div>
        
    )
}