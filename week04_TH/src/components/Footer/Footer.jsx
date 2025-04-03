
import chefifywhite from '../../assets/3_Data/Lab_02/chefifywhite.png';
import LearnMore from '../LearnMore/LearnMore';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className='about-us-footer'>
                <p style={{fontWeight: "bold"}}>About Us</p>
                <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                <div className='input-text'>
                    <input type='text' placeholder='Enter your email'></input>
                    <button>Send</button>
                </div>
                <div className='chefify-footer'>
                    <img src={chefifywhite}></img>
                    <p>2023 Chefify Company</p>
                    <p>Terms of Servicel Privacy Policy</p>
                </div>
            </div>
            <div className='learn-more-footer'>
                <LearnMore items={["Learn More", "Our Cooks", "See Our Features", "FAQ"]}></LearnMore>
                <LearnMore items={["Shop", "Gift Subscription", "Send Us Feedback"]}></LearnMore>
            </div>
            <div className='recipes-footer'>
                <LearnMore items={["Recipes", "What to Cook This Week", "Pasta", "Dinner", "Healthy", "Vegetarian", "Vegan", "Christmas"]}></LearnMore>
            </div>
        </>
    )
}

export default Footer;