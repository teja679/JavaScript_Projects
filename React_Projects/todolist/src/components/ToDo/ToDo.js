import React,{ Component } from "react";
import { Container, Form,Button,ListGroup, Col, InputGroup, Row} from 'react-bootstrap'
import { FaEdit } from 'react-icons/fa';
import { FiDelete } from 'react-icons/fi'
import { MdOutlineBorderAll } from 'react-icons/md'
import {AiOutlineCheckCircle } from 'react-icons/ai'
import './ToDo.css'

class ToDo extends Component{
  constructor(props){
    super(props)
      this.state = {
        inputToDo : "",
        toDoList : [],
        isEditing : false,
        editingIndex : ''
        // ['Revise Asynchronous JavaScript', 'Practive Array Method Questions', 'Revise React Components and Props', 'Revise React states']
      }
  }

  editToDo(inputindex) {
    this.setState((prevState) => ({
      inputToDo : prevState.toDoList[inputindex],
      isEditing : true,
      editingIndex : inputindex
    }))
  }

  addOrUpdateToDo(){
    const {inputToDo, isEditing, editingIndex} = this.state
    if(inputToDo){
      if(isEditing){
        this.setState((prevState) => ({
          toDoList : prevState.toDoList.map((todo, index) => {
            if(index === editingIndex)
              todo = inputToDo
              return todo
          }),
          inputToDo : ''
        }))
      }
      else{
        this.setState((prevState) => ({
          toDoList : [...prevState.toDoList, inputToDo],
          inputToDo : ''
        }))
      }
    }
  }
  deleteToDo(inputindex) {
    const {toDoList} = this.state
    this.setState((prevState) => ({
      toDoList : prevState.toDoList.filter((todo, index) => index != inputindex)
    }))
  }
 
  render(){
    const { toDoList, inputToDo, isEditing } = this.state
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
            variant="outline-dark" 
            id="button-addon2"
            onClick={() => this.addOrUpdateToDo()}
            >{isEditing ? <AiOutlineCheckCircle /> : <MdOutlineBorderAll />}</Button>
          </InputGroup>
          <ListGroup className="to-do-list">
              {toDoList.map((toDo, index) => (
                <ListGroup.Item size='sm'>
                <Row>
                  <Col md={9}> {toDo} </Col>
                  <Col md={3} className="action-btns">
                    <Button variant="warning" id="button-addon2" size='sm'
                      onClick={() => this.editToDo(index)}><FaEdit /> </Button>
                    <Button variant="danger" id="button-addon2" size='sm' 
                      onClick={() => this.deleteToDo(index)}><FiDelete /></Button>
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