import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Cart from './components/Cart/Cart'
import { useState } from 'react'
import { ItemProvider } from './hooks/ItemContext'
import CardDetail from './components/CardDetail/CardDetail'

function App() {
  const [cart, setCart] = useState([]);
  const [adding, setAdding] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setAdding(true)
  } 

  if(adding) {
    alert("Adding");
    setAdding(false);
  }

  return (
    <>
      <ItemProvider>
        <div className='container'>
          <Header cartCount={cart.length}></Header>
          <Routes>
            <Route path='/' element={<Content addToCart={addToCart}></Content>}></Route>
            <Route path='/cart' element={<Cart items={cart}></Cart>}></Route>
            <Route path='/:id' element={<CardDetail></CardDetail>}></Route>
          </Routes>
        </div>
      </ItemProvider>
      <Footer></Footer>
    </>
  )
}

export default App
