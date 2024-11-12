import { motion } from "framer-motion"

function Terms() {
    return (
        <motion.div id="privacy-policy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.h1
                className="hero"
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 350 }}
            >
                OUR TERMS AND CONDITIONS
            </motion.h1>
            <div className="terms max-w-screen-lg m-auto mt-24 px-4 font-khand text-white/85 text-[1.75rem]">
                <p className="font-bold">Our standard agreement, which should give you peace of mind in regards to working with us.</p>
                <p className="text-amber-900 font-bold"><strong>TLDR;</strong> The intellectual property created for your use with your website belongs to you. Your website will be fully owned by you, and you are free to cancel your hosting at your discretion (assuming you host with us, otherwise it is up the terms of your hosting provider).</p>
                <p className="border-t-[1px] border-amber-900/25 mt-10 pt-10">This is an Agreement between you (the “Client”, “You” or “Your”) and With2Bees (“Company”) located at https://with2bees.com. The Company is under no obligation to build, develop, configure, or otherwise provide services to You in connection with the creation of a website. If the Company does agree to provide such services to You (the “Services”), the terms of this Agreement shall apply to the work the Company performs for You.</p>

                <p className=""><strong>1.) Term of Agreement.</strong> This Agreement is effective on the Effective Date, and shall remain in effect until the earlier of (i) the completion of the Services or (ii) until terminated by either party as provided herein. Upon termination of this Agreement, the Company shall cease providing any Services to Client.</p>

                <p className=""><strong>2.) Services are Complimentary Unless Otherwise Agreed.</strong> The Services are provided to Client on a complimentary basis by the Company at its own discretion. Company does not charge for Services unless otherwise agreed to via email correspondence between Company and Client. Company may ask the Client to sign up for one of its preferred web hosting providers through Company&apos;s affiliate link, for which Company may receive a commission.</p>

                <p className=""><strong>3.) Protection of your Intellectual Property.</strong> The website that Company helps Client to create will be Client&apos;s property and Company will retain no ownership rights. In addition, all intellectual property and related material, including any relevant registrations or applications for registration, and rights in any patent, copyright, trademark, trade dress, industrial design and trade name (the “Intellectual Property”) that is developed or produced for Client&apos;s use under this Agreement will be the sole property of the Client.</p>

                <p className=""><strong>4.) Data and Financial Security.</strong> You agree and acknowledge that You are solely responsible for protecting the integrity of all of Your own data (including, but not limited to, any data accessible via your Website, web hosting account, and Google accounts), financial information, and other sensitive and private information, and You agree that the Company shall not be liable for any damages, losses, claims, etc., in connection with such data and information.</p>

                <p className=""><strong>5.) Limitation of Liability.</strong> In no event shall Company, its employees, officers, directors, or affiliated persons or entities, be liable to You or any other person for any indirect, incidental, special, consequential, exemplary, or punitive damages, including loss of profit or goodwill, for any matter arising out of or relating to Company Services, this agreement (or its termination), and/or its subject matter, whether such liability is asserted on the basis of contract, tort, or otherwise even if Company has been advised of the possibility of such damages. Company and any related businesses&apos; total liability (including attorney fees) for damages hereunder or any cause whatsoever relating to company services, contractor services or any applications therein, shall be limited to $250.</p>

                <p className=""><strong>6.) Marketing materials.</strong> You hereby grant the Company a non-exclusive, non-assignable, perpetual license to use screenshots, links, the name of the business for which the Services are provided, and other information about a Client&apos;s website in its promotional or marketing materials. You permit and authorize Company to use such information publicly, including, but not limited to, on the https://with2bees.com, on the Company&apos;s social media accounts, and on other public websites and forums unless You request otherwise in writing. If for any reason You prefer that your website not be featured, You can write to info@with2bees.com.</p>

                <p className=""><strong>7.) Agreement Not To Exploit Company&apos;s Intellectual Property, Confidential Information, Or Trade Secrets.</strong> The Client will not at any time during the Term or after termination of this Agreement use, disclose, or allow or provide access to any Confidential Information to or for Client&apos;s own benefit or for the benefit of any third party except as authorized in writing by the Company prior to any disclosure or as required by applicable law.   The Client understands and agrees that the unauthorized disclosure, removal or misuse of such Confidential Information will irreparably damage the Company and/or third parties dealing with the Company. For purposes of this Agreement, “Confidential Information” means all information of the Company which is unavailable or unknown to the general public or to individuals or entities with whom the Company competes or does business, or with whom it plans to compete or do business, and any and all information, which, if disclosed, would assist in competition against the Company, including, but not limited to, (a) all proprietary information and trade secrets of the Company, including but not limited to the existing and contemplated future products and services, technical data, methods, processes, manuals, SOPs, training documents, emails and email templates, know-how, software, developments and inventions of the Company, (b) the development, research, testing, marketing, strategic business plans and budgets, security measures, manuals, short and long-range product, sales, expansion, diversification and similar plans, and financial activities of the Company, (c) its costs and sources of supplies, (d) the identity and special needs of the clients, leads and vendors of the Company and all business records relating thereto, and (e) the people and organizations with whom the Company has business relationships and the substance of those relationships, including but limited to any investors or funding sources, (f) Clients and leads&apos; personal or business information, including but not limited to proprietary financial or business records, business plans and processes, passwords or account access, website information, (g) existing and potential client or lead lists. Confidential Information also includes any information that the Company may receive or has received from its affiliates or subsidiaries or the Company&apos;s Clients, or any other third party, with any understanding, express or implied, that the information would not be disclosed, and (h) the overall business model of the Company.  Such information includes information communicated in any medium and form including, but not limited to, written, printed, oral, electronic and magnetic.</p>

                <p className=""><strong>8.) Warranty.  EXCEPT AS EXPRESSLY STATED IN THIS AGREEMENT, THE COMPANY DOES NOT MAKE, AND HEREBY DISCLAIMS, ANY AND ALL EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT AND TITLE, AND ANY WARRANTIES ARISING FROM A COURSE OF DEALING, USAGE OR TRADE PRACTICE.</strong></p>

                <p className=""><strong>9.) Indemnification.</strong> Client shall indemnify and hold Company harmless for any losses, claims, damages, awards, penalties, or injuries incurred by any third party, including reasonable attorney fees, which arise from any alleged breach of (i) this Agreement, or (ii) any representations and warranties made under this Agreement.  Company shall promptly notify Client of any such claims if they so arise.</p>

                <p className=""><strong>10.) Notices.</strong> Any notice or other communication required under this Agreement will be deemed to be properly given only when sent via email to info@with2bees.com when to the Company, and to Client&apos;s email address on file with the Company. You represent and warrant that You will keep a valid and up-to-date email address on file with the Company, and that the Company is not responsible for returned mail or email bounces or other causes of non-delivery of emails outside of its control. The effective date of notice shall be the date notice is sent.</p>

                <p className=""><strong>11.) Severable Provisions.</strong> If any term or provision of this Agreement shall, to any extent, be held invalid or unenforceable by a court of competent jurisdiction, then the remainder of this Agreement shall not be affected thereby, and each term and provision shall be valid and enforceable to the fullest extent permitted by law.</p>

                <p className=""><strong>12.) Modifications; Assignment.</strong> Any modifications or changes to this Agreement will only be binding on Company if signed by a duly authorized representative of the Company. The Company, but not You, shall have the right to modify or amend any provisions of this Agreement, provided that such amendments shall be in writing and Company shall provide a copy of the Agreement as amended or modified to You at least 30 days prior to such amendment or modification becoming effective, subject to the limitations set forth in this Section.  If You do not agree to these amended terms, You may terminate this agreement within the 30-day notice period and You will not be bound by the amended terms. Your failure to terminate this Agreement prior to the end of the 30-day notice period shall be deemed to be acceptance of the amendment or modification, and such amendment or modification shall be binding on You upon termination of the notice period. Company shall have the right, upon written notice provided to You, to assign this Agreement in connection with a merger, reorganization, or sale of all or substantially all of the Company&apos;s assets.</p>

                <p className=""><strong>13.) Excusable Delays.</strong> Neither party will be considered to be responsible for failure or delay in performance of this Agreement if the failure or delay is due to war, terrorism, loss of internet, acts of God, or any other causes outside of the direct control of the non-performing party.</p>

                <p className=""><strong>14.) Survival.</strong>  After termination of this Agreement, the terms which suggest or imply continuation will remain in full force and effect. This includes, but is not limited to, confidentiality, indemnification, limitation of liability, and payment of fees. Termination of this Agreement does not release You from obligations incurred prior to the termination of the Agreement or that may accrue thereafter.</p>

                <p className=""><strong>15.) Prior Understandings.</strong> This Agreement contains the entire agreement between the parties with respect to the subject matter of this Agreement. The Agreement supersedes all prior understanding, agreements, or representations.</p>

                <p className=""><strong>16.) Waiver.</strong> Any waiver of a default under this Agreement must be made in writing and shall not be a waiver of any other default concerning the same or any other provision of this Agreement. No delay or omission in the exercise of any right or remedy shall impair such right or remedy or be constructed as a waiver. A consent to or approval of any act shall not be deemed to waive or render unnecessary consent to or approval of any other or subsequent act. The failure of You or Company to enforce the provisions of this Agreement will not be interpreted as a waiver of any provision or the right of such party thereafter to enforce each and every provision of this Agreement.</p>

                <p className=""><strong>17.) Jurisdiction and Venue.</strong> This Agreement is to be construed pursuant to the laws of the State of Delaware, United States. You agree to personal jurisdiction and venue of any court of competent jurisdiction in Kent County, Delaware, without regard to conflict of laws provisions, for any claim arising out of this Agreement.</p>

                <p className=""><strong>18.) Counterparts; Execution; Electronic Signature and Delivery.</strong>  Documents executed, scanned and transmitted electronically and electronic signatures shall be deemed original signatures for purposes of this Agreement and all matters related thereto, with such scanned and electronic signatures having the same legal effect as original signatures. This Agreement, any other document necessary for the consummation of the transaction contemplated by this Agreement may be accepted, executed or agreed to through the use of an electronic signature in accordance with the Electronic Signatures in Global and National Commerce Act (“E-Sign Act”), Title 15, United States Code, Sections 7001 et seq., the Uniform Electronic Transaction Act (“UETA”) and any applicable state law. Any document accepted, executed or agreed to in conformity with such laws will be binding on each party as if it were physically executed.</p>

                <p className=""><strong>19.) Termination.</strong> This Agreement may be terminated at any time with or without cause, by either the Company or You by giving written notice to the other party.</p>
                
            </div>
        </motion.div>
    )
}

export default Terms