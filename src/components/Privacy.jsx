import { motion } from "framer-motion"

function Privacy() {
    return (
        <motion.div id="privacy-policy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="hero"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >
                OUR PRIVACY POLICY
            </motion.h1>
            <div className="terms max-w-screen-lg m-auto mt-24 px-4 font-khand text-white/85 text-[1.75rem]">
                <p className="">At <strong>With2Bees</strong> (with2bees.com), we value the privacy of our visitors. This Privacy Policy document contains the types of information  collected and recorded by With2Bees and how we use it.</p>
                <p className="">If you have additional questions or require more information about our Privacy Policy, do not hesitate to <a href="/contact" className="">contact us</a>.</p>
                <p className="">This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in With2Bees. This policy is not applicable to any information collected offline or via channels other than this website.</p>
                <h3 className="font-bold text-5xl text-shadow-dark">CONSENT</h3>
                <p className="">By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                <h3 className="font-bold text-5xl text-shadow-dark">INFORMATION COLLECTED</h3>
                <h5 className="font-bold text-3xl text-black/50">HOW WE USE IT</h5>
                <p className="">The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
                <p className="">If you contact us directly or apply, we may receive additional information about you such as your name, email address, the contents of the message, and any other information you may choose to provide.</p>
                <p className=""><strong>We use the information we collect in various ways, including to:</strong>
                    <ul>
                        <li>Provide, operate, and maintain our website</li>
                        <li>Improve, personalize, and expand our website</li>
                        <li>Understand and analyze how you use our website</li>
                        <li>Develop new products, services, features, and functionality</li>
                        <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                        <li>Send you emails</li>
                        <li>Find and prevent fraud</li>
                    </ul>
                </p>
                <h3 className="font-bold text-5xl text-shadow-dark">LOGS</h3>
                <p className="">With2Bees follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>
                <h3 className="font-bold text-5xl text-shadow-dark">COOKIES</h3>
                <p className="">Like any other website, With2Bees uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</p>
                <h3 className="font-bold text-5xl text-shadow-dark">CCPA PRIVACY RIGHTS</h3>
                <h5 className="font-bold text-3xl text-black/50">DO NOT SELL MY PERSONAL INFORMATION</h5>
                <p className="">Under the CCPA, among other rights, <strong>California consumers have the right to:</strong>
                <ul>
                    <li>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                    <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                    <li>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</li>
                </ul>
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                <h3 className="font-bold text-5xl text-shadow-dark">GDPR DATA PROTECTION RIGHTS</h3>
                <p className="">We would like to make sure you are fully aware of all of your data protection rights.</p>
                <p className=""><strong>Every user is entitled to the following:</strong>
                <ul>
                    <li>The right to access - You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                    <li>The right to rectification - You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                    <li>The right to erasure - You have the right to request that we erase your personal data, under certain conditions.</li>
                    <li>The right to restrict processing - You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                    <li>The right to object to processing - You have the right to object to our processing of your personal data, under certain conditions.</li>
                    <li>The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                </ul>
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                <h3 className="font-bold text-5xl text-shadow-dark">CHILDREN&apos;S INFORMATION</h3>
                <p className="">We prioritize the importance of protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their child&apos;s online activity.</p>
                <p className="">With2Bees does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best to remove such information from our records.</p>
            </div>
        </motion.div>
    )
}

export default Privacy