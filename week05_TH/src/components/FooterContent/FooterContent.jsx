import './FooterContent.css';

export default function FooterContent({contents}) {
    return (
        <ul className="footer-list">
            {contents.map((content) => {
                return <li key={content}>{content}</li>
            })}
        </ul>
    )
}