

export const mapReducer = (state={isFetching: false, url: undefined}, action)=>{
  switch(action.type){
    case 'START_LOCATION_FETCH':
     return {
       isFetching: true,
       url: undefined
     }
    case 'COMPLETE_LOCATION_FETCH':
     return {
       isFetching: false,
       url: action.url
     }
    default:
     return state
  }
}
