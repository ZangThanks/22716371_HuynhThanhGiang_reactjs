import './App.css'
import chefifyLogo from './assets/Lab_02/chefify.png';
import check from './assets/Lab_02/check.png'
import avt from './assets/Lab_02/avatar.png'
import nothing from './assets/Lab_02/nothing.png'
import list from './assets/Lab_02/list_filter.png'
import checkbox from './assets/Lab_02/checkbox.png'
import checkboxpink from './assets/Lab_02/checkboxpink.png'


function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <div className='header-left'>
            <img src={chefifyLogo}/>  
            <input className='input-container' type='text' placeholder='cakescascsa'></input>
          </div>
          <div className='header-right'>
            <ul style={{listStyleType: 'none', gap: '10px', display: 'flex'}}>
              <li>What to cook</li>
              <li>Recipes</li>
              <li>Ingredients</li>
              <li>Occassions</li>
              <li>About Us</li>
              <li style={{display: 'flex', color: 'rgb(248, 91, 117)', fontWeight: 'bold', backgroundColor: 'pink', borderRadius: '20px', padding: '10px'}}>
                <img src= {check} />
                <span>Your Recipe Box</span>
              </li>
              <li>
                <img src={avt} />
              </li>
            </ul> 
          </div>
        </div>
        <div className='menu'>
          <div className='header-menu'>
            <img src={list} ></img>
            <span style={{fontWeight: 'bold'}}>FILTER</span>
          </div>
          <div>
            <h6>Type</h6>
            <img src=''/>
          </div>
          <div>
            <ul style={{listStyleType: 'none'}}>
              <li>
                <img src={checkbox} />
                <span>Pan-tried</span>
              </li>
              <li>
                <img src={checkboxpink} />
                <span>Grilled</span>
              </li>
              <li>
                <img src={checkbox} />
                <span>Sauteed</span>
              </li>
              <li>
                <img src={checkbox} />
                <span>Steamed</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <h2>Sorry, no results were found for "cakescascsa"</h2>
          <img src={nothing}></img>
          <span>We have all your independence Day sweets covered.</span>
          <ul className='card-content' style={{listStyleType: 'none', display: 'flex', gap: '10px'}}>
            <li>Sweet Cake</li>
            <li>Black Cake</li>
            <li>Pozole Verde</li>
            <li>Healthy food</li>
          </ul>
        </div>
        <div className="footer">
          <h4>Footer</h4>
        </div>
      </div>
    </>
  )
  
}


export default App
