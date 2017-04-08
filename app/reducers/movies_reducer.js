
let nextMovieId = 1;
export const moviesReducer = (state=[], action)=>{
  switch(action.type){
    case 'ADD_MOVIE':
      return[
        ...state,
        {
          movie: action.title,
          genre: action.genre,
          id: nextMovieId++
        }
      ]
    case 'REMOVE_MOVIE':
     return state.filter((movie)=> movie.id !== action.id)
    default:
     return state
  }
}
