import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import Products from './components/Products';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
     {/* <NavbarComponent />
     <Products /> */}
     <ParentComponent />
    </div>
  );
}

export default App;
