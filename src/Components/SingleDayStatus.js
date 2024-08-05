import React from "react";
import './SingleDayStatus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Card,Button } from "react-bootstrap";
// to render a small card containing a specifice date and status of habit on that particular day



const SingleDayStatus = ({day,i,status,toggleStatus}) => {
    /* getting value of the day, index of habit in the habit list, status of habit {done, not done, pending}
        function to change the status of habit from the props */
        const getButtonStyle = (currentStatus) => {
            if (status === currentStatus) {
                switch (currentStatus) {
                    case true:
                        return { backgroundColor: '#059212', color: 'white' };
                    case false:
                        return { backgroundColor: '#C40C0C', color: 'white' };
                    case null:
                        return { backgroundColor: '#180161', color: 'white' };
                    default:
                        return {backgroundColor: 'grey', color: 'white'};
                }
            } else {
                return {backgroundColor: 'grey', color: 'white'}; 
            }
        };
    

    // render the card
    return(
       
        // card container
        <div className="card-container ">
             <Card className="main_card"  style={{ backgroundColor: '#55AD9B', color: 'white' }}>
                <Card.Body>
                    <Card.Title>{day}</Card.Title>
                </Card.Body>
                <Card.Body className="button">
                    <Button onClick={() => toggleStatus(i, true)} style={getButtonStyle(true)}>
                        <FontAwesomeIcon icon={faCircleCheck} />
                    </Button>
                    <Button onClick={() => toggleStatus(i, false)} style={getButtonStyle(false)} >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </Button>  
                    <Button  onClick={() => toggleStatus(i, null)} style={getButtonStyle(null)} >
                        <FontAwesomeIcon icon={faEllipsis} />
                    </Button>     
      </Card.Body>
    </Card>
            
           
            
        </div>
    )
}


// export the component
export default SingleDayStatus;
