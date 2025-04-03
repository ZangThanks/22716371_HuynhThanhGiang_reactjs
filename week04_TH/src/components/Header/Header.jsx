import avt_small from '../../assets/3_Data/Lab_02_b/avatar_small.png'
import activecheck from '../../assets/3_Data/Lab_02_b/archive_check.png';
import avt from '../../assets/3_Data/Lab_02_b/avatar.png';
import SearchBox from '../SearchBox/SearchBox';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    return (
        <>
            <img src={avt_small}></img>
            <SearchBox></SearchBox>
            <ul className='list-display'>
                <li onClick={() => navigate('/load-food')}>What to cook</li>
                <li>Recipes</li>
                <li>Ingredients</li>
                <li>Occasions</li>
                <li>About us</li>
                <li>
                    <div className='cart'>
                    <img src={activecheck} style={{marginRight: "5px"}}></img>
                    <span>Your Recipe Box</span>
                    </div>
                </li>
                <li>
                    <img src={avt} style={{height: "40px"}}></img>
                </li>
            </ul>
        </>
    )
}

export default Header;