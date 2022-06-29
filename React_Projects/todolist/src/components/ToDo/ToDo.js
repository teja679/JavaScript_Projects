import React,{ Component } from "react";
import { Container, Form,Button,ListGroup, Col, InputGroup, Row} from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi'
import { MdOutlineBorderAll } from 'react-icons/md'
import './ToDo.css'

class ToDo extends Component{
  constructor(props){
    super(props)
      this.state = {
        inputToDo : "",
        toDoList : ['Revise Asynchronous JavaScript', 'Practive Array Method Questions', 'Revise React Components and Props', 'Revise React states']
      }
  }
  render(){
    const { toDoList, inputToDo } = this.state
    return(
      <Container style={{margin:'20px auto'}}>
        <Col md={{span:4, offset:4}}>
          <InputGroup className="mb-3">
            <Form.Control 
              size="lg" 
              type="text" 
              placeholder="Enter To-Do"
              value={inputToDo}
              onChange={(e) => this.setState ({inputToDo : e.target.value})} />
            <Button 
            variant="outline-secondary" 
            id="button-addon2"
            onClick={() => this.setState((prevState) => ({
              toDoList : [...prevState.toDoList, inputToDo]
            }))}
            ><MdOutlineBorderAll /></Button>
          </InputGroup>
          <ListGroup className="to-do-list">
              {toDoList.map(toDo => (
                <ListGroup.Item size='sm'>
                <Row>
                  <Col md={9}> {toDo} </Col>
                  <Col md={3} className="action-btns">
                    <Button variant="warning" id="button-addon2" size='sm'><FaEdit /> </Button>
                    <Button variant="danger" id="button-addon2" size='sm'><FiDelete /></Button>
                  </Col>
                </Row>
              </ListGroup.Item>
              ))}           
        </ListGroup>
        </Col>
      </Container>
    )
  }
}

export default ToDo