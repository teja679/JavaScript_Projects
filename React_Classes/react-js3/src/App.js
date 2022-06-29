import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import Products from './components/Products';

 
class App extends Component {
  render(){
    this.setState  = {
      
  }
    return (
      <div className="App">
         <Navbar />
          <Products />

      </div>
    );
  }
}

export default App;
