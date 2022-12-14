import './App.css'
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import Checkout from './components/Checkout/Checkout'
import BuyConfirmation from './components/BuyConfirmation/BuyConfirmation'

function App() {
  return (
    <div className="app">
      <CartContextProvider value={[]}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<ItemListContainer greeting="Nuestros Productos" />}
            />
            <Route
              exact
              path="/category/:id"
              element={<ItemListContainer greeting="Nuestros Productos" />}
            />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Checkout />} />
            <Route
              exact
              path="/confirmation/:id"
              element={<BuyConfirmation />}
            />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
