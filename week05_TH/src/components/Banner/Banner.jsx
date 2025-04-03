import banner from '../../assets/two-business-partners-working-together-office-computer.jpeg';
import './Banner.css';

export default function Banner() {
    return (
        <div className='banner-container'>
            <img src={banner}></img>
            <div className='banner-content'>
                <p>Talk to us</p>
                <span>Tooplate is one of the best HTML CSS template websites for everyone</span>
            </div>
        </div>
    )
}