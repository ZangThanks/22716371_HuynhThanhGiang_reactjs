import './Cart.css';

export default function Cart({items}) {
    const [text, setText] = useState('');

    return (
        <div>
            <input value={text} onChange={(e) => setText(e.target.value)}></input>
            <div className="cart-container">
                {items.map((item, index) => {
                    return <div key={index}>
                        <img src={item.image} width="200"></img>
                        <p style={{fontWeight: "bold", fontSize: "20px"}}>{item.alt}</p>
                        <p>${item.price}</p>
                        <p>{item.detail}</p>
                    </div>
                })}
            </div>
        </div>
    
    )
}