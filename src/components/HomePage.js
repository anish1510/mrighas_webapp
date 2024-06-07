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
import checkmark from '../images/check-mark.webp'
import tradeimg from '../images/tradeimg.webp'
import aiimg from '../images/aiimg.webp'
import sleepimg from '../images/sleepimg.webp'
import ximg from '../images/50ximg.webp'
import botimg from '../images/botimg.webp'
import Popup from 'reactjs-popup';
import { Link as ScrollLink, Element } from 'react-scroll';
import trc20 from '../images/trc20.svg'
import bnbimg from '../images/bnbimg.png'
import paypalimg from '../images/paypalimg.webp'
import { useState } from 'react';

function HomePage() {

    const [userData, setuserData] = useState({
        fullName : '',
        phoneNumber : '',
        email : '',
        service : '',
      });

      const onFullNameChange = (event) => {
        setuserData({...userData, fullName: event.target.value})
      }

      const onPhoneNumberChange = (event) => {
        setuserData({...userData, phoneNumber: event.target.value})
      }

      const onEmailChange = (event) => {
        setuserData({...userData, email: event.target.value})
      }

      const onServiceChange = (event) => {
        setuserData({...userData, service :event.target.value})
      }

      const submit = () => {
        const response = fetch('https://vincitfx-web-api-a2d39a85e841.herokuapp.com/api/Mrighas/sendemail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        alert("Your enruiry is submited. Someone will contact you soon...")
      }
    
    return(
        <div className='home-main-div'>
            <Element name='welcome' className='welcome'>
                <div className='navigation-div'>
                    <img src={logo} className='logo' alt="image"></img>
                    <ul>
                        <li><ScrollLink  to="welcome" smooth={true} duration={1000} className='home-btn' id='btn-1'>HOME</ScrollLink></li>
                        <li><ScrollLink  to="we_provide" smooth={true} duration={1000} className='home-btn' id='btn-2'>OUR OFFERING</ScrollLink ></li>
                        <li><ScrollLink  to="our_services" smooth={true} duration={1000} className='home-btn' id='btn-3'>SERVICES</ScrollLink></li>
                        <li><a  href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRSPCXl5yL5TChy_21ECj0vzeeaE_mz_Vj--geDRBrTJJyZ1YuaI_1G1UBwFp6o5J4n_Dis444wEAqC/pub?output=pdf" className='home-btn' id='btn-4'>TRACKSHEET</a></li>
                        <li><ScrollLink  to="contact" smooth={true} duration={1000} className='home-btn' id='btn-5'>CONTACT</ScrollLink></li>
                    </ul>
                </div>
                <div className='company-desc-div'>
                    <p className='company-desc-p-1'>We are <span style={{color:"#D24896"}}>Mrighas Services</span></p>
                    <p className='company-desc-p-2'>We Provide AI-based Comex and Forex signals. Backed by research reports to create wealth for the generation</p>
                    <button className='company-desc-btn'>GET STARTED</button>
                    <img src={trade_world_bg} className='company-desc-img' alt="image"></img>
                </div>
                <div className='trust-div'>
                    <p className='trust-p'>Over 52,000 traders worldwide trust Mrighas now it's your turn</p>
                    <button className='trust-btn'>ENQUIRE NOW</button>
                    <img src={hero_iphone} className='hero_iphone' alt="image"></img>
                </div>
            </Element>

        <Element name='we_provide' className='we_provide'>
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
                        <img src={checkmark} className='checkmark' alt="image"></img>
                        <p className='service-p-1'>Secure Transaction Assitance</p>

                        <img src={checkmark} className='checkmark-2' alt="image"></img>
                        <p className='service-p-2'>Deep Analysis and Scrutiny</p>

                        <img src={checkmark} className='checkmark-3' alt="image"></img>
                        <p className='service-p-3'>Comprehensive Technical and Market Analysis</p>

                        <img src={checkmark} className='checkmark-4' alt="image"></img>
                        <p className='service-p-4'>Recommendatory Transaction using ML tools</p>

                        <img src={checkmark} className='checkmark-5' alt="image"></img>
                        <p className='service-p-5'>Superior Investment Insights</p>

                        <img src={checkmark} className='checkmark-6' alt="image"></img>
                        <p className='service-p-6'>Automated Strategies</p>

                        <img src={tradeimg} className='tradeimg' alt="image"></img>

                    </div>

                    <div className='ai-div'>

                        <p className='ai-p'>DELIVERING EXCELLENCE USING AI ANALYSIS</p>
                        <ul className='ai-ul'>
                            <li>
                                It provides you the most accurate market insight with an accuracy of 99.4% which is the highest among all the others and thus accelerating wealth creation.
                            </li>
                            <li>
                                Providing Machine Learning deployed Reinforcement Learning to ascertain the users of trading strategies.             
                            </li>
                            <li>
                                Machine Learning algorithm deployed Bots provides you the most accurate insights of the market and relative suggestions.
                            </li>
                            <li>
                                AI performed historical, status – quo and future prediction analysis so you end up investing on the right coin and at the right time.
                            </li>
                            <li> 
                                Comprehensive research report providing you an informative past, present and predictive analysis.
                            </li>
                        </ul>
                        <img src={aiimg} className='aiimg' alt="image"></img>

                    </div>

                    <div className='deliver-div'>

                        <p className='deliver-p-1'>HOW WE DELIVER TRUST TO OUR USERS</p>
                        <p className='deliver-p-2'>
                            With our sheer determination and diligence, we have helped numerous clients around the globe and helped them to
                            take their crypto trading and investment experience to a next level.
                        </p>
                        <img src={ximg} className='ximg' alt="image"></img>
                        <p className='deliver-p-3'>We help our clients to earn 50x more than what they have paid us.</p>

                        <img src={sleepimg} className='sleepimg' alt="image"></img>
                        <p className='deliver-p-4'>Our team offers diligence and dedication to our clients so that they can earn even if they sleep.</p>

                        <img src={botimg} className='botimg' alt="image"></img>
                        <p className='deliver-p-5'> We provide AI monitored risk management and capital protection strategies to mitigate any chances of loss.</p>

                    </div>

                    <div className='expert-div'>

                        <p className='expert-p'>Get An Expert Advise From Our Professionals</p>
                        <button className='enquire-btn'>Enquire Now</button>
                        <button className='whatsapp-btn'>WhatsApp Now</button>

                    </div>

        </Element>
        <Element name='our_services' className='our_services'>


                    <p className='services-p'>OUR SERVICES</p>
                    <div className='services-div-1'>
                        <button className='basic-btn'>Basic</button>
                        <ul className='basic-ul'>
                            <li>2-3 Signals Daily</li>
                            <li>85% Accuracy</li>
                            <li>1:15 Risk Reward Ratio</li>
                            <li>Qualified Research Analyst</li>
                            <li>Entry Price, 2 Take Profit targets and Stop Loss</li>
                            <li>Al Based Signals</li>
                            <li>Signals through Telegram</li>
                            <li>Signals through Whatsapp</li>
                            <li>Free Newsletter</li>
                        </ul>
                        <div className='basic-price'>Price List</div>
                        <div className='basic-1'>1 Month&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$199</div>
                        <div className='basic-2'>6 Month&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$699</div>
                        <div className='basic-3'>1 Year&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$1199</div>

                        {<Popup id='popup'
                            trigger={<button className='basic-buy'>Buy Now</button>} modal nested>
                            {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                &times;
                                </button>
                                <div className="header"> Payment Method </div>
                                <div className="content">
                                <table>
                                    <tr>
                                        <th>Network</th>
                                        <th>Address</th>
                                    </tr>
                                    <tr>
                                        <td><img src={trc20} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'65px', left:'65px', fontWeight:'bold'}}>(TRC20)</p></td>
                                        <td>Maria Anders</td>
                                    </tr>
                                    <tr>
                                        <td><img src={bnbimg} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'143px', left:'65px', fontWeight:'bold'}}>(BEP20)</p></td>
                                        <td>Francisco Chang</td>
                                    </tr>
                                    <tr>
                                        <td><img src={paypalimg} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'213px', left:'65px', fontWeight:'bold'}}>Paypal</p></td>
                                        <td>Francisco Chang</td>
                                    </tr>
                                </table>
                                <img src={trc20} className='trc20foot' alt="image"></img>
                                <img src={bnbimg} className='bnbimgfoot' alt="image"></img>
                                <img src={paypalimg} className='paypalfoot' alt="image"></img>
                                </div>
                            </div>
                            )}
                        </Popup>}

                    </div>

                    <div className='services-div-2'>

                        <button className='basic-btn'>Gold</button>
                        <ul className='basic-ul'>
                            <li>3-4 Signals Daily</li>
                            <li>90% Accuracy</li>
                            <li>1:75 Risk Reward Ratio</li>
                            <li>Certified Research Analyst</li>
                            <li>Entry Price, 2 Take Profit targets and Stop Loss</li>
                            <li>Al Based Signals</li>
                            <li>Signals through Telegram</li>
                            <li>Signals through Whatsapp</li>
                            <li>Free Newsletter</li>
                        </ul>
                        <div className='basic-price'>Price List</div>
                        <div className='basic-1'>1 Month&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$499</div>
                        <div className='basic-2'>6 Month&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$1499</div>
                        <div className='basic-3'>1 Year&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$2499</div>
                        {<Popup
                            trigger={<button className='basic-buy'>Buy Now</button>} modal nested>
                            {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                &times;
                                </button>
                                <div className="header"> Payment Method </div>
                                <div className="content">
                                <table>
                                    <tr>
                                        <th>Network</th>
                                        <th>Address</th>
                                    </tr>
                                    <tr>
                                        <td><img src={trc20} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'65px', left:'65px', fontWeight:'bold'}}>(TRC20)</p></td>
                                        <td>Maria Anders</td>
                                    </tr>
                                    <tr>
                                        <td><img src={bnbimg} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'143px', left:'65px', fontWeight:'bold'}}>(BEP20)</p></td>
                                        <td>Francisco Chang</td>
                                    </tr>
                                    <tr>
                                        <td><img src={paypalimg} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'213px', left:'65px', fontWeight:'bold'}}>Paypal</p></td>
                                        <td>Francisco Chang</td>
                                    </tr>
                                </table>
                                <img src={trc20} className='trc20foot' alt="image"></img>
                                <img src={bnbimg} className='bnbimgfoot' alt="image"></img>
                                <img src={paypalimg} className='paypalfoot' alt="image"></img>
                                </div>
                            </div>
                            )}
                        </Popup>}

                    </div>

                    <div className='services-div-3'>

                        <button className='basic-btn'>Premium</button>
                            <ul className='basic-ul'>
                                <li>4-5 Signals Daily 95% Accuracy</li>
                                <li>1:2 Risk Reward Ratio</li>
                                <li>CMT Certified Research Analyst Team</li>
                                <li>Entry Price, 2 Take Profit targets and Stop Loss</li>
                                <li>Al Based Signals</li>
                                <li>Signals through Telegram</li>
                                <li>Signals through Whatsapp</li>
                                <li>Free Newsletter</li>
                                <li>Dedicated Relationship Manager</li>
                            </ul>
                            <div className='basic-price'>Price List</div>
                            <div className='basic-1'>1 Month&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$999</div>
                            <div className='basic-2'>6 Month&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$3499</div>
                            <div className='basic-3'>1 Year&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;$5999</div>

                            {<Popup
                            trigger={<button className='basic-buy'>Buy Now</button>} modal nested>
                            {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                &times;
                                </button>
                                <div className="header"> Payment Method </div>
                                <div className="content">
                                <table>
                                    <tr>
                                        <th>Network</th>
                                        <th>Address</th>
                                    </tr>
                                    <tr>
                                        <td><img src={trc20} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'65px', left:'65px', fontWeight:'bold'}}>(TRC20)</p></td>
                                        <td>Maria Anders</td>
                                    </tr>
                                    <tr>
                                        <td><img src={bnbimg} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'143px', left:'65px', fontWeight:'bold'}}>(BEP20)</p></td>
                                        <td>Francisco Chang</td>
                                    </tr>
                                    <tr>
                                        <td><img src={paypalimg} className='trc20' alt="image"></img><p style={{fontSize:'20px', position:'absolute', top:'213px', left:'65px', fontWeight:'bold'}}>Paypal</p></td>
                                        <td>Francisco Chang</td>
                                    </tr>
                                </table>
                                <img src={trc20} className='trc20foot' alt="image"></img>
                                <img src={bnbimg} className='bnbimgfoot' alt="image"></img>
                                <img src={paypalimg} className='paypalfoot' alt="image"></img>
                                </div>
                            </div>
                            )}
                        </Popup>}
                    </div>
        </Element>
        <Element name='contact' className='contact'>
            <p className='contact-p'>CONTACT</p>
            <div className='address'>
                <p className='address-p'>Address</p>
                <p className='address-line'>UK - 515, Highgate Studios, 45-50 Highgate Rd, London NW6 1TL, United Kingdom</p>
                <p className='address-phone'>+91-8982117469</p>
            </div>
            <div className='enquiry-div'>
            <p className='enuiryform'>ENQUIRY FORM</p>
            <input type="text" id="username" placeholder="Full Name*" value={userData.fullName} onChange={onFullNameChange} required />
            <input type="text" id="contatnumber"  placeholder="Contact Number With Country Code*" value={userData.phoneNumber} onChange={onPhoneNumberChange} required />
            <input type="text" id="email"  placeholder="Email*" value={userData.email} onChange={onEmailChange} required />
            <input type="text" id="service"  placeholder="Service*" value={userData.service} onChange={onServiceChange} required />
            <p className='terms'><input type="checkbox" id="termsradio" required />&nbsp;&nbsp;&nbsp; I agree to Mrighas Services <a href='' style={{textDecoration:'none', color:'#007bff'}}>Terms and Conditions</a> & <a href='' style={{textDecoration:'none', color:'#007bff'}}>Privacy Policy</a></p>
            <p className='newslater'><input type="checkbox" id="termsradio" required />&nbsp;&nbsp;&nbsp; I would like to recieve occassional emails updates from Mrighas Services</p>
            <button className='submitenquiry' onClick={submit}>Get Started</button>
            </div>
        </Element>




        </div>
    )

}

export default HomePage

