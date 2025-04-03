
import uparr from '../../assets/3_Data/Lab_03/Chevron up large 1.png';
import ticks from '../../assets/3_Data/Lab_03/List 1.png';
import slider from '../../assets/3_Data/Lab_02/slider.png';
import TypeMenu from '../TypeMenu/TypeMenu';
import Rating from '../Rating/Rating';
import './Menu.css';

function Menu(){
    return (
        <>
            <div className='border-menu'>
            <div className='head-list'>
              <img src={ticks}></img>
              <h4>FILTER</h4>
            </div>
            <div>
              <div className='type-head'>
                <p style={{fontWeight: "bold"}}>Type</p>
                <img src={uparr}></img>
              </div>
              <TypeMenu></TypeMenu>
            </div>
            <div>
              <div className='type-head'>
                <p style={{fontWeight: "bold"}}>Time</p>
                <img src={uparr}></img>
              </div>
              <img src={slider}></img>
            </div>
            <div>
              <div className='type-head'>
                <p style={{fontWeight: "bold"}}>Rating</p>
                <img src={uparr}></img>
              </div>
              <Rating></Rating>
            </div>
          </div>
        </>
    )
}

export default Menu;