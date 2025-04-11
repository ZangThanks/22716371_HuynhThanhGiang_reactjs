import "./AdminPage.css";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Menu from "../../components/Menu/Menu";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function AdminPage() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="content">
        <Routes>
          <Route path="/Dashboard" element={<Content />}></Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default AdminPage;
