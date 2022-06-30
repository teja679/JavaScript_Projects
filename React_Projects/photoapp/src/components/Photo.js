import {useState , useEffect} from 'react'
import {Card, Button, Col, Row, Container} from 'react-bootstrap'
import axios from 'axios'

const Photo = () => {
  const [photos, setPhotos] = useState([])
     
  useEffect(() => {
    const getPhotos = async () => {
      try{
        const res = await axios.get("https://picsum.photos/v2/list")
        setPhotos(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getPhotos()
  }, [])  // [] dependency array

  return(
    <div>
      <Container>
        <Row>
          {photos.map((photo) => (
            <Col key={photo.id} md={3} className='single-photo'>
              <Card style={{ width: '18rem' }}>
              <Card.Header>{photo.author}</Card.Header>
              <Card.Img variant="top" src={photo.download_url} />
              <Card.Body>
                <Button variant="primary">view source</Button>
              </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Photo

/* axios.get("https://picsum.photos/v2/list")
        .then(res => [products, setProducts] = res.data)
        .catch(err => console.log(err))v*/