import { Card, Button, Col, Row, Badge , Spinner} from 'react-bootstrap'
import './Home.css'
import { AiOutlineLike, AiTwotoneLike } from 'react-icons/ai'
import { GoComment } from 'react-icons/go'
import { FaUserCircle } from 'react-icons/fa'


const Post = ({posts, setPosts}) => {
    const incrementLikeCount = (postId) => {
        let updatedPosts = posts.map(post => {
          if (post.id === postId) {
            if (post.LikeStatus)
              post.likeCount += 1
            else
              post.likeCount -= 1
            post.LikeStatus = !post.LikeStatus
          }
    
          return post
        })
        setPosts(updatedPosts)
      }
      const incrementCommentCount = (postId) => {
        let updatedPosts = posts.map(post => {
          if (post.id === postId) {
            post.CommentCount = post.CommentCount + 1
          }
          return post
        })
        setPosts(updatedPosts)
      }
    
  return (
    <Col md={5}>
    <Row>
      {posts.length ?
        (posts.map((post, index) => (
          <Col key={post.id} md={12} className='single-photo'>
            <Card style={{ marginTop: '5px' }}>
              <Card.Header className='post-header'>
                <div>
                  <FaUserCircle />{' '}{post.author}{' '}
                </div>
                <p className='post-time'> {post.time}</p>
              </Card.Header>
              <Card.Img variant="top" src={post.download_url} className='photo-img' />
              <Card.Body>
                {post.text}
                  <div className='action-btn-outer'>
                    <Button variant='light' style={{ display: 'flex', margin: '10px 10px 10px 0' }} onClick={() => incrementLikeCount(post.id)}>
                      {post.LikeStatus ? <AiOutlineLike /> : <AiTwotoneLike />}<Badge pill bg="dark">{post.likeCount}</Badge>
                    </Button>
                    <Button variant='light' style={{ display: 'flex', margin: '10px 10px 10px 0' }} onClick={() => incrementCommentCount(post.id)}>
                      <GoComment />{' '}
                      <Badge pill bg="dark">{post.CommentCount}</Badge>
                    </Button>
                  </div>
              </Card.Body>
            </Card>
          </Col>
        ))) : (<div className='spinner'><Spinner animation="border" variant="warning" /></div>)}
    </Row>
  </Col>
  )
}

export default Post