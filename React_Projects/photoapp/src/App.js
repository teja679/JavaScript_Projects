import './App.css';
import About from './components/About';
import Photo from './components/Photo/Photo'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import EnlargedPhoto from './components/EnlargedPhoto'

import { BrowserRouter, Routes, Route , Link} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Photo />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/photos/:id' element={<EnlargedPhoto />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
