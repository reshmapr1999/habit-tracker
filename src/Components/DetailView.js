import React from 'react';
import { useParams,Navigate  } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import './DetailView.css'
import { toggleHabitStatus } from "../Redux/action";
import SingleDayStatus from './SingleDayStatus';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function DetailView() {
  const { id } = useParams();
  const habitIndex = Number(id);
  const {initialStateHabit} = useSelector(state =>state.allHabits)
  const habit = initialStateHabit[habitIndex]; // Get the specific habit by its index
  const dispatch = useDispatch();

  

  // Check if habitIndex is valid
  if (isNaN(habitIndex) || habitIndex < 0 || habitIndex >= initialStateHabit.length) {
    return <Navigate to="/404" />;  // Redirect to /404 if the index is invalid
  }
  //to notify task done ot not
  const toggleStatus = (dayIndex, status) =>{
    dispatch(toggleHabitStatus({habitIndex,dayIndex,status}));
    if(status===true){
      toast.success("Task completed");
    }
    else if(status===false){
      toast.error("Task not completed");
    }
    else if(status===null){
      toast.warning("Task pending");
    }
    
  };
  const CalculateDayOfWeek = (date) => {
    // array storing all the dates and day
    var days = new Array(7);
    // storing values in asceding order of date
    for (var i = 6; i >= 0; i--){
        // store values in the form of string
        days[6-i] = new Date(date.getFullYear(), date.getMonth(), date.getDate() - i).toString();
        days[6-i] = `${days[6-i].slice(0,4)}, ${days[6-i].slice(4,15)}`;
    }
    // return the array of dates
    return days;
}
const weekDays = CalculateDayOfWeek(new Date());

  return(
   
    <Container className="  mt-5">
      <Row className='display'>
        <Col className='habitTitle'>
           <h3>Habit: {habit.name}</h3>
           <h6>Days Completed :{habit.completedDays}/7 Days </h6>
          </Col>
        <Col className='d-flex justify-content-center align-items-center'>
        <h5>CreatedOn:&nbsp;&nbsp; {habit.createdOn}</h5>
        </Col>
      </Row>
      <ToastContainer />
     
                  
                <div key={habit.id} className="mb-3">
                  
                    <div className="w-full h-full p-2 flex flex-row justify-between flex-wrap items-center mt-[2%]">
                   {/* mapping over all the days of week and adding their respective cards  */}
                    {weekDays.map((day,i) =>  <SingleDayStatus key={i} 
                                                            day={day}
                                                            i={i}
                                                           
                                                            status={habit.weekStatus[i]}
                                                            toggleStatus={toggleStatus} />)}
                                                           
                </div>
                </div>
            
         
          </Container>
   

  );
}

export default DetailView;
