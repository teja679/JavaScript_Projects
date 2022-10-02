import './App.css';
import './components/style.css'
// import HomePage from './components/HomePage';
import NavbarComp from './components/NavbarComp';

function App() {
  const indexData = [
    'Training', 'Meetings', 'Webinars',
    'Conferences', 'Videos', 'PM Speaker Series',
    'Blogs', 'Podcasts', 'Be A Speaker',
    'Be A Volunteer', 'About Us'
  ]
  return (
    <div className="App">
      <NavbarComp />

      <div className='home-page'>
        {/* <img src='https://i.pinimg.com/originals/e4/b7/42/e4b7425bda6e1a33c930f4fc6c707ae1.jpg' alt='meet'/> */}
        <div className='index'>
          {indexData.map((data) =>
            <p>{data}</p>
          )}
        </div>
        <div className='index-data'>
            Hello
        </div>
      </div>
      <div className='home-page2'>
        <h1>Why We Matter</h1>
        <img width='75' height='50' src="./assets/red_arrow.png" alt='im' />
      </div>
    </div>
  );
}

export default App;
/*{indexData.map((data, index) => {
                // console.log(data)
                <p key={index}>{data}</p>
            })}*/