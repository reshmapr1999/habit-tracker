export const ADD_HABIT='ADD_HABIT';
export const DELETE_HABIT = 'DELETE_HABIT';
export const TOGGLE_HABIT_STATUS = 'TOGGLE_HABIT_STATUS';


export const addHabit=(habit) =>{
    return{
        type: ADD_HABIT,
        payload: habit,
    }
}


export const deleteHabit = (index) => ({
  type: DELETE_HABIT,
  payload: index
});

export const toggleHabitStatus = ({ habitIndex, dayIndex, status }) => ({
  type: TOGGLE_HABIT_STATUS,
  payload: { habitIndex, dayIndex, status },
});