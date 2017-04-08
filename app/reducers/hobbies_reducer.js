let nextHobbyId = 1;
export const hobbiesReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          hobby:action.name,
          id: nextHobbyId++
        }
      ]
    case 'REMOVE_HOBBY':
      return state.filter((hobby)=> hobby.id !== action.id)
    default:
     return state
  }
}
