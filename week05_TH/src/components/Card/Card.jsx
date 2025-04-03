import { useContext } from 'react';
import './Card.css';
import { UseContext } from '../../hooks/ItemContext';
import { useNavigate } from 'react-router-dom';

export default function Card({addToCart}) {
    const navigate = useNavigate();

    const {data} = useContext(UseContext);

    return (
        <div className='card-container'>
            {data.map((item, index) => {
                return <li key={index} className='card-cotent'>
                    <img src={item.image} onClick={() => navigate(`/${item.price}`)}></img>
                    <div className='card-body'>
                        <p style={{fontWeight: "bolder", fontSize: "18px"}}>{item.alt}</p>
                        <p>${item.price}</p>
                    </div>
                    <span>{item.detail}</span>
                    <button onClick={() => {addToCart(item)}}>Add to cart</button>
                </li>
            })}
        </div>
    )
}