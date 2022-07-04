import { useEffect, useState } from 'react'
import { Row, Container, Button, Col, Card } from 'react-bootstrap'
import './NewsList.css'

const SingleNews = () => {
  const [newsList, setNewsList] = useState([])

  return (
    <div>
      <Container>
        <Row>
            <Col md={{span:'4', offset:'4'}} className='single-news'>
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
        </Row>
      </Container>
    </div>
  )
}

export default NewsList