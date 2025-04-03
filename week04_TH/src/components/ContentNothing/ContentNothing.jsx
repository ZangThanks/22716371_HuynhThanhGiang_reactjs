
import nothing from '../../assets/3_Data/Lab_02/nothing.png';
import CardChild from '../Card/CardChild';

function ContentNothing() {
    return (
        <>
            <h2>Sorry, no results were found for "cakescasscsa"</h2>
            <img src={nothing}></img>
            <p>We have all your independence Day sweets covered.</p>
            <CardChild></CardChild>
        </>
    )
}

export default ContentNothing;