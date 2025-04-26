import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavHeader from "./components/NavHeader";

function App() {
  return (
    <div className="w-full">
      <Header />
      <div className="w-[1400px] pb-50 bg-gray-200 flex justify-center items-center">
        <img src="./src/assets/logo.png" alt="" />
      </div>
      <div className="mx-[5vw] w-[90vw]">
        <NavHeader />
        <Banner />
      </div>
    </div>
  );
}

export default App;
