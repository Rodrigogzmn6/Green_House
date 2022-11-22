import './App.css';
import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting='CODERHOUSE'/>
    </div>
  );
}

export default App;
