import l from "../../assets/l.svg"
import "./LiquideLife.css"
const LiquideLife = ()=>{
    return <div> 
        <div className="header">
            <img src={l} className="logo" alt="" />
            <div className="menuItem">
                <a>Markets</a>
                <a>About Us</a>
                <a>We are hiring!</a>
            </div>
            <button className="loungeButton">Enter Lounge</button>
        </div>
        <main className="main">
            <div>
                <img src="https://ik.imagekit.io/liquide/tr:w-2283/images/bulb.png?ik-sdk-version=react-1.1.0" alt="" />
                <div className="welcomeText">
                    <h1 className="mainWelcomeText">Stock Investing </h1>
                    <h1 className="mainWelcomeText">made simple</h1>
                    <p className="subWelcomeText">Join our waiting lounge and be the first to get access. 1,50,000+ signups already!</p>
                    <div className="inputWrapper">
                        <div className="inputNumber">
                            <label>+91</label>
                            <input placeholder="Phone  Number"></input>
                            <button className="loungeButton">Enter Lounge</button>
                        </div>
                        <p className="referingText">Refer Friends. Check in faster. Earn rewards.</p>
                    </div>
                </div>
            </div>  
            <div className="sectionOne">
                <h1>Investing is difficult & we know it!</h1>
                <div>
                    <span class="mx-2"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 16.5C21.0379 16.5 24.75 12.7874 24.75 8.25C24.75 3.71259 21.0379 0 16.5 0C11.9621 0 8.25 3.71259 8.25 8.25C8.25 12.7874 11.9621 16.5 16.5 16.5ZM16.5 20.625C11.0345 20.625 0 23.4095 0 28.875C0 31.1532 1.84683 33 4.125 33H28.875C31.1532 33 33 31.1532 33 28.875C33 23.4095 21.9655 20.625 16.5 20.625Z" fill="url(#paint0_linear_793_517)"></path><defs><linearGradient id="paint0_linear_793_517" x1="-5.24812e-08" y1="19.1691" x2="33" y2="19.1691" gradientUnits="userSpaceOnUse"><stop stop-color="#F06859"></stop><stop offset="1" stop-color="#F5B344"></stop></linearGradient></defs></svg></span>
                    <span class="mx-2"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.5 16.5C21.0379 16.5 24.75 12.7874 24.75 8.25C24.75 3.71259 21.0379 0 16.5 0C11.9621 0 8.25 3.71259 8.25 8.25C8.25 12.7874 11.9621 16.5 16.5 16.5ZM16.5 20.625C11.0345 20.625 0 23.4095 0 28.875C0 31.1532 1.84683 33 4.125 33H28.875C31.1532 33 33 31.1532 33 28.875C33 23.4095 21.9655 20.625 16.5 20.625Z" fill="url(#paint0_linear_793_517)"></path><defs><linearGradient id="paint0_linear_793_517" x1="-5.24812e-08" y1="19.1691" x2="33" y2="19.1691" gradientUnits="userSpaceOnUse"><stop stop-color="#F06859"></stop><stop offset="1" stop-color="#F5B344"></stop></linearGradient></defs></svg></span>
                    <span class="mx-2"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M16.5 16.5C21.0379 16.5 24.75 12.7874 24.75 8.25C24.75 3.71259 21.0379 0 16.5 0C11.9621 0 8.25 3.71259 8.25 8.25C8.25 12.7874 11.9621 16.5 16.5 16.5ZM16.5 20.625C11.0345 20.625 0 23.4095 0 28.875C0 31.1532 1.84683 33 4.125 33H28.875C31.1532 33 33 31.1532 33 28.875C33 23.4095 21.9655 20.625 16.5 20.625Z" fill="white"></path></svg></span>
                    <span class="mx-2"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.1" d="M16.5 16.5C21.0379 16.5 24.75 12.7874 24.75 8.25C24.75 3.71259 21.0379 0 16.5 0C11.9621 0 8.25 3.71259 8.25 8.25C8.25 12.7874 11.9621 16.5 16.5 16.5ZM16.5 20.625C11.0345 20.625 0 23.4095 0 28.875C0 31.1532 1.84683 33 4.125 33H28.875C31.1532 33 33 31.1532 33 28.875C33 23.4095 21.9655 20.625 16.5 20.625Z" fill="white"></path></svg></span>
                </div>
                <div>
                    <span className="valueInPercentage">29% </span>
                    <span className="offUserSays"> off user says</span>
                </div>
                <div>
                    <p className="description">Overload of social information</p>
                    <p className="isBiggestText">is the biggest pain</p>
                </div>
            </div>
            <div className="sectionTwo">
                <p className="sectionTwoTitle">Promise of Liquide</p>
                <div className="sectionTwoMain">
                    <div>
                        <div className="number">01.</div>
                        <div className="sectionMainText">Trade like you <span className="textGrad">date!</span></div>
                        <div className="bottomText">Curated stock matches. Optimised trade setup. Swipe to Trade.</div>
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/liquide/tr:w-430.5/icons/benefits/date/stock.png?ik-sdk-version=react-1.1.0" alt="" />
                    </div>
                </div>
            </div>
        </main>

    </div>
}

export default LiquideLife;