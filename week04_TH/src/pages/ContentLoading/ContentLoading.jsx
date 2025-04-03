import { useEffect, useState } from "react";
import CardProduct from "../../components/Card/CardProduct";
import './ContentLoading.css';

export default function ContentLoading() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://67deba96471aaaa742856ccc.mockapi.io/data/v1/Products")
        .then((res) => {
            if(!res.ok) {
                throw new Error("Failed to fetch product!");
            }
            return res.json();
        })
        .then((data) => {
            console.log("Fetched Data:", data);
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error.message);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <h2>Loading product ...</h2>
    }

    if(error) {
        return <h2 style={{color: "red"}}>Error: {error}</h2>
    }
    
    return (
        <div className="loading-container">
            <h1>Salad (32)</h1>
            <div className="list-container">
                {products.map((product) => {
                    return (
                        <CardProduct key={product.id} product={product}></CardProduct>
                    )
                })}
            </div>
        </div>
        
    );
}