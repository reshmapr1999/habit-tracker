import { ADD_HABIT, DELETE_HABIT,TOGGLE_HABIT_STATUS} from './action.js';

const initialState ={
    initialStateHabit: [],
    
}

const habitReducer=(state = initialState,action) =>{
    switch(action.type){
        case ADD_HABIT : 
            return{
            ...state,
            initialStateHabit : [...state.initialStateHabit, action.payload],
            }
        case DELETE_HABIT:
            return {
                ...state,
                initialStateHabit: state.initialStateHabit.filter((_, index) => index !== action.payload),
            };
            
        case TOGGLE_HABIT_STATUS:
            
        {
          const { habitIndex, dayIndex, status } = action.payload;

          // Create a shallow copy of the existing habits array
          const updatedHabits = [...state.initialStateHabit];

          // Create a shallow copy of the habit object to be updated
          const updatedHabit = { ...updatedHabits[habitIndex] };

          // Create a deep copy of the weekStatus array
         const updatedWeekStatus = [...updatedHabit.weekStatus];

  // Get the previous status for logging and comparison
          const previousStatus = updatedWeekStatus[dayIndex];
           updatedWeekStatus[dayIndex] = status;

          // Update the status of the task for the given day
       
          console.log('Week Status:', updatedHabit.weekStatus); // Logs the entire weekStatus array
          console.log('Day Status:', updatedHabit.weekStatus[dayIndex]); // Logs the specific day status

          // Update the completedDays count based on the status change
          if (status === true && previousStatus !== true) {
              updatedHabit.completedDays++;
          } else if (status !== true && previousStatus === true) {
              updatedHabit.completedDays--;
          }

           // Assign the updated weekStatus array back to the habit
          updatedHabit.weekStatus = updatedWeekStatus;

          // Update the particular habit within the copied array and return the new state
          updatedHabits[habitIndex] = updatedHabit;

          return {
              ...state,
              initialStateHabit: updatedHabits,
          };
        
      }

              
              default:
                return state;
            };
           
        }

export default habitReducer;