import {useState , useEffect} from 'react'
import {Card, Button, Col, Row, Container, Spinner, Badge} from 'react-bootstrap'
import axios from 'axios'
import './Post.css'
import {BiLike} from 'react-icons/bi'
import {GoComment} from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'
import dummyPostText from '../../assets/dummyPostText.json'
import dummyPostTime from '../../assets/dummyPostTime.json'


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
      <Container className='post-container'>
        <Row>
          {photos.length ?
          (photos.map((photo) => (
            <Col key={photo.id} md={12} className='single-photo'>
              <Card style={{ width: '18rem', marginTop: '5px' }}>
              <Card.Header className='post-header'>
                <div>
                  <FaUserCircle/>{' '}{photo.author}{' '}
                </div>
                <p className='post-time'> {dummyPostTime[Math.ceil(Math.random()*7)]}</p>
              </Card.Header>
              <Card.Img variant="top" src={photo.download_url} className='photo-img'/>
              <Card.Body>
              {dummyPostText[Math.ceil(Math.random()*4)]}
                <Row>
                  <Col className='action-btn-outer' md={{span:7, offset:3}} >
                    <Button className='btns' variant='light'>
                      <BiLike />{' '}
                      <Badge pill bg="dark">125</Badge>
                    </Button>
                    <Button className='btns' variant='light'>
                      <GoComment />{' '}
                      <Badge pill bg="dark">56</Badge>
                    </Button>
                  </Col>
                </Row>
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