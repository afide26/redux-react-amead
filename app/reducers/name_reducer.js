export const nameReducer = (state='Anonymous', action)=>{
  switch(action.type){
    case 'CHANGE_NAME':
     return action.name
     default:
      return state
  }
}
