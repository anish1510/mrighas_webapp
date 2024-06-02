import '../css/HomePage.css'
import logo from '../images/logo.png'
import trade_world_bg from '../images/trade_world_bg.webp'
import hero_iphone from '../images/hero_iphone.webp'
import psimg from '../images/psimg.webp'
import rrimg from '../images/rrimg.webp'
import eximg from '../images/eximg.webp'
import maimg from '../images/maimg.webp'
import taimg from '../images/taimg.webp'
import iiimg from '../images/iiimg.webp'
function HomePage() {

    return(
        <div className='home-main-div'>
            <div id='section1'>
                <div className='navigation-div'>
                    <img src={logo} className='logo' alt="image"></img>
                    <a href='#section1' className='home-btn' id='btn-1'>HOME</a>
                    <a href='#section2' className='home-btn' id='btn-2'>OUR OFFERING</a>
                    <a href='#section3' className='home-btn' id='btn-3'>SERVICES</a>
                    <a href='#section5' className='home-btn' id='btn-4'>TRACKSHEET</a>
                    <a href='#section4' className='home-btn' id='btn-5'>CONTACT</a>
                </div>
                <div className='company-desc-div'>
                    <p className='company-desc-p-1'>We are Mrighas</p>
                    <p className='company-desc-p-2'>We Provide AI-based Comex and Forex signals. Backed by research reports to create wealth for the generation</p>
                    <button className='company-desc-btn'>GET STARTED</button>
                    <img src={trade_world_bg} className='company-desc-img' alt="image"></img>
                </div>
                <div className='trust-div'>
                    <p className='trust-p'>Over 52,000 traders worldwide trust Mrighas now it's your turn</p>
                    <button className='trust-btn'>ENQUIRE NOW</button>
                    <img src={hero_iphone} className='hero_iphone' alt="image"></img>
                </div>
            </div>
            <div id='section2'>
                <div className='provide-div'>
                    <p className='provide-p'>WHAT WE PROVIDE</p>
                    <div className='provide-div-1'>
                        <img src={psimg} className='proimg' alt="image"></img>
                        <p className='proheader'>PERSONAL SUPPORT</p>
                        <p className='prodesc'>
                            We are always happy to provide extensive help and support to our clients. We provide help with queries, trade ideas, market analysis, etc.
                        </p>
                    </div>
                    <div className='provide-div-2'>
                        <img src={rrimg} className='proimg-2' alt="image"></img>
                        <p className='proheader'>RESEARCH REPORTS</p>
                        <p className='prodesc'>
                        Receive AI based crypto signal ideas with comprehensive research reports.
                        </p>
                    </div>
                    <div className='provide-div-3'>
                        <img src={eximg} className='proimg-3' alt="image"></img>
                        <p className='proheader'>EXPLORE</p>
                        <p className='prodesc'>
                        Assimilate the knowledge of crypto trading from experienced traders and begin your trading journey right away.
                        </p>
                    </div>
                    <div className='provide-div-4'>
                        <img src={maimg} className='proimg-2' alt="image"></img>
                        <p className='proheader'>MARKET ANALYSIS</p>
                        <p className='prodesc'>
                        Get detailed market analysis and precise statistical information performed by deep AI analysis.
                        </p>
                    </div>
                    <div className='provide-div-5'>
                        <img src={taimg} className='proimg' alt="image"></img>
                        <p className='proheader'>TECHNICAL ANALYSIS</p>
                        <p className='prodesc'>
                        We Perceive future of the market with the help of past trends using the most reliable Machine - Learning tools.
                        </p>
                    </div>
                    <div className='provide-div-6'>
                        <img src={iiimg} className='proimg' alt="image"></img>
                        <p className='proheader'>INVESTMENT INSIGHTS</p>
                        <p className='prodesc'>
                        We provide accurate investment insights directly from the market & help it to deliver to our clients through experts for more concise expression.
                        </p>
                    </div>
                </div>
                <div className='service-div'>
                    <p className='service-p'>OUR AI SERVICES INTENT AUGMENT YOUR TRADING EXPERIENCE BY PROVIDING YOU:</p>
                </div>

                
            </div>

        </div>
    )

}

export default HomePage