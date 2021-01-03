import './css/App.css';
import Header from './components/Header'
import Projects from './components/Projects'
import Classes from './components/Classes'
import Carousels from './components/Carousels'
function App() {
  return (
    <>
    <div className="App">
    <Header/>
    <Carousels/>
    <Classes/>
    </div>
    </>
  );
}

export default App;
