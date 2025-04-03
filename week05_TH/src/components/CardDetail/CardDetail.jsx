import { useContext } from 'react';
import './CardDetail.css';
import { UseContext } from '../../hooks/ItemContext';
import { useParams } from 'react-router-dom';


export default function CardDetail() {
    const {id} = useParams();

    const {data} = useContext(UseContext);

    const item = data.find(item => (id == item.price))
    console.log(item);
    
    return (
        <div className='detail-container'>
            <img src={item.image}></img>
            <p style={{fontWeight: "bolder", fontSize: "26px"}}>{item.alt}</p>
            <p>${item.price}</p>
        </div>
    )
}