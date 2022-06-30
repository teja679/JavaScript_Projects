import './App.css';
import Photo from './components/Photo'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Photo />
    </div>
  );
}

export default App;
