import './Menu.css';

export default function Menu() {
    const list = ['Link 1', 'Link 2', 'Link 3'];

    return (
        <div className="menu-container">
            <ul>
                {list.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    );
}
