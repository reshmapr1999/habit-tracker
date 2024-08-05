
import { Modal, Button ,Form, Col, Container, Row,ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faCirclePlus,faCalendarCheck,faTrash } from '@fortawesome/free-solid-svg-icons';
import "./Home.css"
import React, { useState } from 'react';
import { useSelector ,useDispatch} from "react-redux";
import { addHabit,deleteHabit  } from "../Redux/action";
import AnimatedQuotes from './AnimatedQuotes'
import { Link } from "react-router-dom";
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function Home() {
    const [habit,setHabit] =useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {initialStateHabit} = useSelector(state =>state.allHabits)
    const dispatch = useDispatch()
      
   
    const AddHabitHandler = () => {
      if (habit.trim() === '') {
        toast.error("please enter a habit");
      }
      else{
        // getting current date to store the creation date
      const newDate =  new Date().toString();

      // create an array representing seven days of weeks
      // initialize all the value with null  ( null = pending status of habit on each day )
      const weekStatus = Array(7).fill(null);
      
      // structure of data to be store inside the habit list
      const data = {
       
        name:habit,
        
        // days on which the habit is completed { initially zero }
        completedDays:0,
        // creation date
        createdOn:`${newDate.slice(4,15)}`,
        
        // weekly status of all the days
        weekStatus:weekStatus
    };
        dispatch(addHabit(data))
        handleClose()
        setHabit('') 
        toast.success('New Habit is Added !!');
      
      }
      
    }
    //to delete
    const DeleteHabitHandler = (index) => {
      
      dispatch(deleteHabit(index));
  };

  const ViewHandler = () =>{

  }

  return (
    <div className="main-container">
       <ToastContainer />
      <div className="left-content">
      <Container className="custom-container d-flex   mt-5 ">
          <Row className='row1 mb-5 '>
            <Col md={2} className='row1_c  my-1 me-4' ><FontAwesomeIcon icon={faCalendarCheck}style={{ color: '#2E236C' }} /></Col>
            <Col md={6}><h4 style={{ color: '#2E236C'}}>Habits</h4></Col>
          </Row>

          
          <Row className="row2 mt-4 d-flex justify-content-end" >
            <Col >
            <Button
            type='button'
            className='bg-primary mt-3 mobile'
            onClick={() => handleShow(true)}>
            <FontAwesomeIcon icon={faCirclePlus}/> &nbsp;&nbsp; New Habit
          </Button>
            </Col>
          </Row>
   </Container>  
   {/* //to display the habits */}
   <ListGroup >
        {initialStateHabit.map((item, index) => (
          <ListGroup.Item key={index} className='habit-container'>
            <Row className="row3 ">
              <Col md={8} className='habit-title d-flex justify-content-center align-items-center'>{item.name}</Col>
              
              <Col md={1} className='icons d-flex justify-content-center align-items-center'>
              <FontAwesomeIcon icon={faTrash}style={{ fontSize: '12px' }}onClick={() => DeleteHabitHandler(index)} />   
              </Col>
              <Col  className="view d-flex justify-content-center align-items-center">
              {/* to display the detailed view of a habit */}
              <Link to={`/habit/${index}`}>
             <Button onClick={() => ViewHandler()}>View Details</Button>
             </Link>
             </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
           
        {/* to take the input */}
       
       <Modal show={show} onHide={handleClose} aria-labelledby='contained-modal-title-vcenter' centered>
        <Modal.Header >
          <Modal.Title>New Habit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form >
            <Form.Group controlId='habit'>
              <Form.Label>Habit Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Habit'
                value={habit}
                autoFocus={true}
                required={true}
                onChange={(e) => setHabit(e.target.value)}></Form.Control>
            </Form.Group>
            <Modal.Footer>
           
          <Button variant="secondary" onClick={handleClose}> Close</Button>
          <Button variant="primary" onClick={() => AddHabitHandler()}> Add Habit  </Button>
        </Modal.Footer>
        </Form>
            
        </Modal.Body>
        
      </Modal>
      </div>
      <div className="right-content">
      <AnimatedQuotes />
      </div>
      

    </div>
  )
}

export default Home
