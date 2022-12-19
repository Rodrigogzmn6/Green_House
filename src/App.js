import './App.css'
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './contexts/CartContext'
import Cart from './components/Cart/Cart'

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
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  )
}

export default App
