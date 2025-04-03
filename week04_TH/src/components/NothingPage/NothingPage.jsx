import './NothingPage.css';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import ContentNothing from '../ContentNothing/ContentNothing';
import Footer from '../Footer/Footer';

export default function NothingPage() {
    return (
        <>
            <div className='container'>
                <div className='header'>
                    <Header></Header>
                </div>
                <div className='menu'>
                    <Menu></Menu>
                </div>
                <div className='content'>
                    <ContentNothing></ContentNothing>
                </div>
                <div className='footer'>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}