
import { Row, Container, Button, Col, Card } from 'react-bootstrap'
import './NewsList.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const NewsList = () => {
  const [newsList, setNewsList] = useState([])

  useEffect(() => {
   const getNewsList = async () => {
      try {
        const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dd982a8bb9974e3bb39e4d3a46e7a238')
        setNewsList(res.data.articles)
      } catch (err) {
        console.log(err)
      }
    }
    getNewsList()
  }, [])

  return (
      <Container>
        <Row>
          {newsList.map((singleNews, index) => (
            <Col key={index} md={4} className='single-news'>
              <Card>
                <Card.Img variant="top" src={singleNews.urlToImage}
                  alt='single-news'
                />
                <Card.Body>
                  <Card.Title>{singleNews.title.length > 70
                  ? `${singleNews.title.slice(0, 70)}...` : singleNews.title}</Card.Title>
                  <Card.Text>
                    {singleNews.description.length > 100
                  ? `${singleNews.description.slice(0, 100)}...` : singleNews.description}
                  </Card.Text>
                  <Button variant="primary">Read more</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
  )
}

export default NewsList