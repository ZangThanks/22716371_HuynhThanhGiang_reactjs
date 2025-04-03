import './Header.css';
import { useNavigate } from "react-router-dom";

export default function Header({cartCount}) {
    const navigate = useNavigate();

    const choices = [<p onClick={() => navigate('/')}>Home</p>, 'Story', 'FAQs', 'Contact', <i onClick={() => navigate("/cart")} className="fa-solid fa-cart-shopping">({cartCount})</i>]

    return (
        <div className="header-container">
            <div>
                <span className="little">Little </span>
                <span className="fashion">Fashion</span>
            </div>
            <ul className="list-choice">
                    {choices.map((value, index) => {
                        return <li key={index}><a>{value}</a></li>
                    })}
            </ul>
        </div>
    )
}