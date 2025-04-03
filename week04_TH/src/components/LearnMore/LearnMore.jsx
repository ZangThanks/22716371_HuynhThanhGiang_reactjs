import './LearnMore.css'

function LearnMore({ items }) {
    return(
        <ul className="learn-container">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

export default LearnMore;