import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting='HOLA CODERHOUSE'/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
