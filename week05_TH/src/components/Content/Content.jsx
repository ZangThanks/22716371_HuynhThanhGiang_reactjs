import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import './Content.css';

export default function Content({addToCart}) {
    return (
        <div className="cotent-container">
            <Banner></Banner>
            <div className="content-body">
                <p style={{fontWeight: "bolder", fontSize: "30px"}}>New Arrivals</p>
                <Card addToCart={addToCart}></Card>
            </div>
        </div>
    )
}