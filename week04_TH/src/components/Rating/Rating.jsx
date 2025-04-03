import checkbox from '../../assets/3_Data/Lab_02/checkbox.png';
import checkpink from '../../assets/3_Data/Lab_02/checkboxpink.png';
import star_5 from '../../assets/3_Data/Lab_02/rating_5.png';
import star_4 from '../../assets/3_Data/Lab_02/rating_4.png';
import star_3 from '../../assets/3_Data/Lab_02/rating_3.png';
import star_2 from '../../assets/3_Data/Lab_02/rating_2.png';
import star_1 from '../../assets/3_Data/Lab_02/rating_1.png';
import './Rating.css';

function Rating() {
    return (
        <ul className='rating-container'>
            <li>
                <img src={checkbox}></img>
                <img src={star_5}></img>
            </li>
            <li>
                <img src={checkbox}></img>
                <img src={star_4}></img>
            </li>
            <li>
                <img src={checkpink}></img>
                <img src={star_3}></img>
            </li>
            <li>
                <img src={checkpink}></img>
                <img src={star_2}></img>
            </li>
            <li>
                <img src={checkpink}></img>
                <img src={star_1}></img>
            </li>
        </ul>
    )
}

export default Rating;