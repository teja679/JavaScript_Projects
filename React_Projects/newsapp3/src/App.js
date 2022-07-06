import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <NewsList />
    </div>
  );
}

export default App;
