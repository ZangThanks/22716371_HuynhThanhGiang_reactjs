import './SearchBox.css'
import search from '../../assets/3_Data/Lab_02_b/search.png'

function SearchBox() {
    return(
        <>
            <div className="search-container">
                <input type='text' placeholder='cakescascsa' className='search-input'></input>
                <img src={search} alt='Search' className='search-icon'></img>
            </div>
        </>
    )
}

export default SearchBox;