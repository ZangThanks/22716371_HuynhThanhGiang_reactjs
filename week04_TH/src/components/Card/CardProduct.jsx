import './CardProduct.css';
import icon from '../../assets/3_Data/Lab_02_b/Icon Button 73.png';
import { useNavigate } from 'react-router-dom';

export default function CardProduct({product}) {
    const navigate = useNavigate();

    return (
        <div className="container-card" onClick={() => navigate("/")}>
            <img src={product.image} alt={product.name} ></img>
            <div className='content-card'>
                <div className='name-icon'>
                    <div style={{fontWeight: "bold", fontSize: "14px"}}>{product.name}</div>
                    <img src={icon}></img>
                </div>
                <div className='time-card'>{product.time} mins</div>
            </div>
        </div>
    )
}