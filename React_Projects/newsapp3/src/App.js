import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import NewsList from './components/NewsList/NewsList'
// import Contact from './components1/Contact';
// import About from './components1/About';
// import Photo from './components1/Photo/Photo'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import NotFound from './components1/NotFound';

const App = () => {
  return (
    // <BrowserRouter>
      /* </BrowserRouter> */
      <div className="App">
        <Navbar />
        <NewsList />
        {/* <Routes>
          <Route path='/' element={<Photo />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/photos/:id' element={<EnlargedPhoto />} />
          <Route path='*' element={<NotFound />} />
        </Routes> */}
      </div>
  
  )
}

export default App;

