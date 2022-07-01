import {useState , useEffect} from 'react'
import {Card, Button, Col, Row, Container, Spinner} from 'react-bootstrap'
import axios from 'axios'
import './Post.css'

const Post = () => {
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
          {photos.length ?
          (photos.map((photo) => (
            <Col key={photo.id} md={3} className='single-photo'>
              <Card style={{ width: '18rem' }}>
              <Card.Header>{photo.author}</Card.Header>
              <Card.Img variant="top" src={photo.download_url} className='photo-img'/>
              <Card.Body>
                <a className='btn btn-dark' href={photo.url}>view source</a>
              </Card.Body>
              </Card>
            </Col>
          ))) : (<div className='spinner'><Spinner animation="border" variant="warning" /></div>)}
        </Row>
      </Container>
    </div>
  )
}

export default Post

/* axios.get("https://picsum.photos/v2/list")
        .then(res => [products, setProducts] = res.data)
        .catch(err => console.log(err))v*/