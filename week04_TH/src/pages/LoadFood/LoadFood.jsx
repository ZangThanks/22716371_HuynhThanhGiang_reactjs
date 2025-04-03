
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import ContentLoading from "../ContentLoading/ContentLoading";

import './LoadFood.css';

export default function LoadFood() {
    
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
                   <ContentLoading></ContentLoading>
                </div>
                <div className='footer'>
                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}