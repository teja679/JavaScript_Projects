import { useState, useEffect } from 'react'
import { Row, Container,} from 'react-bootstrap'
import axios from 'axios'
import dummyPostText from '../../assets/dummyPostText.json'
import dummyPostTime from '../../assets/dummyPostTime.json'
import MemberActiveStatusList from './MemberActiveStatusList'
import Post from './Post'
import ChatList from './ChatList'
import dummyChatText from '../../assets/dummyChatText.json'



const Home = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("https://picsum.photos/v2/list")
        let rePosts = [...res.data]
        let addLikesComments = rePosts.map(post => {
          let likeCount = Math.ceil(Math.random() * 1000)
          let CommentCount = Math.ceil(Math.random() * 1000)
          let time = dummyPostTime[Math.ceil(Math.random() * 7)]
          let text = dummyPostText[Math.ceil(Math.random() * 4)]
          let LikeStatus = true
          return {
            ...post, likeCount, CommentCount, time, text, LikeStatus
          }
        })
        setPosts(addLikesComments)
      } catch (err) {
        console.log(err)
      }
    }
    getPosts()
  }, [])  // [] dependency array

  let randomChatList = posts.filter(post => Number(post.id) % 5 === 0)
    .map((post) => {
      post.chat = dummyChatText[Math.ceil(Math.random() * 5)]
      return post
    })

  return (
    <div>
      <Container className='post-container'>
        <Row>
          <MemberActiveStatusList posts={posts} />
         <Post posts={posts} setPosts={setPosts}/>
          <ChatList posts={randomChatList} />
        </Row>
      </Container>
    </div>
  )
}

export default Home

/* axios.get("https://picsum.post/v2/list")
        .then(res => [products, setProducts] = res.data)
        .catch(err => console.log(err))v*/