import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path='/' element={<ItemListContainer greeting='Nuestros Productos'/>}/>
          <Route exact path='/category/:id' element={<ItemListContainer greeting='Nuestros Productos'/>}/>
          <Route exact path='/item/:id' element={<ItemDetailContainer />}/>
          <Route exact path='/cart'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;