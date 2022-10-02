import React from 'react'
import './style.css'

const HomePage = () => {
    const indexData = [
        'Training', 'Meetings', 'Webinars',
        'Conferences', 'Videos', 'PM Speaker Series',
        'Blogs', 'Podcasts', 'Be A Speaker',
        'Be A Volunteer', 'About Us'
    ]
  return (
    <div className='home-page'>
       
        <div className='index'>
            {indexData.map((data, index) => 
                // console.log(data)
                <p key={index}>{data}</p>
            )}
        </div>
        <div className='index-data'>

        </div>
    </div>
  )
}

export default HomePage