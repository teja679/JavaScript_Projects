import {  Col, Badge, ListGroup } from 'react-bootstrap'
import { FaUserCircle } from 'react-icons/fa'
import dummyChatText from '../../assets/dummyChatText.json'

const ChatList = ({ posts }) => {
	return (
		<Col md={3}>
			<ListGroup as="ol" numbered>
				{posts.map((post) => (
					<ListGroup.Item
						as="li"
						className="d-flex justify-content-between align-items-start chat-list-item"
						key={post.id}
					>
						<div className="ms-2 me-auto">
							<div className="fw-bold"><FaUserCircle />{' '}{post.author}</div>
							{dummyChatText[Math.random(Math.ceil()*7)]}
						</div>
						<Badge bg="primary" pill>
							2
						</Badge>
					</ListGroup.Item>
				))}
			</ListGroup>
		</Col>
	)
}

export default ChatList