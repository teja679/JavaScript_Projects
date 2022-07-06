import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'

const NewsList = () => {

  const [news, setNews] = useState([])

  useEffect(() => {
    const getNews = async () => {
      try{
        let res = await axios.get('https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in')
        setNews(res.data.articles)
      }catch(err){
        console.log(err)
      }
    }
    getNews()
  }, [])
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default NewsList

// https://newsapi.org/v2/top-headlines?apiKey=6d36a43e2ab643af9f2a95f64b8bf2cc&country=in