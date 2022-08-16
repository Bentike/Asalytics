import Algorand from './Components/Algorand';
import './App.css';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
       <Header/>
       <h1 className='header__text'>List of Algorand Standard Assets <br/> on ASAlytics</h1>
       <Algorand/>
    </div>
  );
}

export default App;
