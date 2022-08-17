import { QueryClient, QueryClientProvider} from 'react-query'
import Algorand from './Components/Algorand';
import './App.css';
import Header from './Components/Header';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="App">
          <Header testid='header'/>
          <h1 className='header__text'>List of Algorand Standard Assets <br/> on ASAlytics</h1>
          <Algorand testid='algorand'/>
        </div>
    </QueryClientProvider>
  );
}

export default App;
