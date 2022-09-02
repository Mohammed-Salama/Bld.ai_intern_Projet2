import './App.css';
import CardsSection from './components/CardsSection';
import NavBar from './components/NavBar';
import data from './data/data.json';
function App() {
  return (
    <>
    <NavBar />
    <CardsSection data={data}/>
    </>
  );
}

export default App;
