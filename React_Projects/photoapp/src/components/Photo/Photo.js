import {useState , useEffect} from 'react'
import {Card,  Col, Row, Container, Spinner} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './Photo.css'
// import { Link } from 'react-router-dom'

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
          {photos.length ?
          (photos.map((photo) => (
            <Col key={photo.id} md={3} className='single-photo'>
              <Card>
              <Card.Header>{photo.author}</Card.Header>
              <Card.Img variant="top" src={photo.download_url} className='photo-img'/>
              <Card.Body className='photo-wrapper'>
                <a className='btn btn-dark' href={photo.url}>view source</a>
                <Link className='btn btn-dark' to={`/photos/${photo.id}`}>view Enlarge</Link>
              </Card.Body>
              </Card>
            </Col>
          ))) : (<div className='spinner'><Spinner animation="border" variant="warning" /></div>)}
        </Row>
      </Container>
    </div>
  )
}

export default Photo

/* axios.get("https://picsum.photos/v2/list")
        .then(res => [products, setProducts] = res.data)
        .catch(err => console.log(err))v*/