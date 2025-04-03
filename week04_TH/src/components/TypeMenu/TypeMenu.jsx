import checkbox from '../../assets/3_Data/Lab_02/checkbox.png';
import checkpink from '../../assets/3_Data/Lab_02/checkboxpink.png';
import './TypeMenu.css';

function TypeMenu() {
    return(
        <>
            <ul className='type-container'>
                <li>
                    <img src={checkbox}></img>
                    <p>Pan-fried</p>
                </li>
                <li>
                    <img src={checkbox}></img>
                    <p>Stir-fried</p>
                </li>
                <li>
                    <img src={checkpink}></img>
                    <p>Grilled</p>
                </li>
                <li>
                    <img src={checkpink}></img>
                    <p>Roasted</p>
                </li>
                <li>
                    <img src={checkbox}></img>
                    <p>Sauteed</p>
                </li>
                <li>
                    <img src={checkbox}></img>
                    <p>Baked</p>
                </li>
                <li>
                    <img src={checkbox}></img>
                    <p>Steamed</p>
                </li>
                <li>
                    <img src={checkbox}></img>
                    <p>Stewed</p>
                </li>
            </ul>
        </>
    )
}

export default TypeMenu;