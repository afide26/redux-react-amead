import redux, {combineReducers, createStore, compose} from 'redux'
import axios from 'axios'
import {reducer} from './reducers/main_reducer'
// Action Generators
import {changeName, addMovie, removeMovie,addHobby, removeHobby, startLocationFetch, completeLocationFetch} from './actions/all_actions'
console.log("Learning Redux")
console.log("==============")

const oldReducer = (state=stateDefault, action)=>{
  switch(action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name:action.name
      }
    case 'ADD_HOBBY':
      return{
        ...state,
        hobbies:[
          ...state.hobbies,
          {
            name: action.name,
            id: nextHobbyId++
          }
        ]
      }
    case 'REMOVE_HOBBY':
     return{
       ...state,
       hobbies:[
         state.hobbies.filter((hobby)=> hobby.id !== action.id)
       ]
     }
    case 'ADD_MOVIE':
     return{
       ...state,
       movies:[
         ...state.movies,
         {
           title: action.title,
           genre: action.genre,
           id: nextMovieId++
         }
       ]
     }
    case 'REMOVE_MOVIE':
     return{
       ...state,
       movies:[
         state.movies.filter((movie)=> movie.id !== action.id)
       ]
     }
    default:
      return state;
  }
}


export const store = createStore(reducer, compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

const fetchLocation = ()=>{
  store.dispatch(startLocationFetch());
  axios.get('http://ipinfo.io').then(function(res){
    const loc = res.data.loc
    const baseUrl = "http://maps.google.com.au?q="
    store.dispatch(completeLocationFetch(baseUrl+loc))
  }).catch((e)=>{
    console.log(e)
  })
}


const unsubscribe = store.subscribe(()=>{
  var state = store.getState()
  console.log('Name is ', state.name)
  console.log(state)
  if(state.map.isFetching){
    document.getElementById('app').innerHTML = `<div>Loading...</div>`
  }else if(state.map.url){
    document.getElementById('app').innerHTML = `<a target="_blank" src="'+state.map.url '">View Your Location</a>`
  }
})

store.dispatch(changeName('Alan'))
fetchLocation()
store.dispatch(addHobby('Walking'))
store.dispatch(addHobby('Programming React'))
store.dispatch(addHobby('Martial Arts'))
store.dispatch(changeName('Carlos'))
store.dispatch(addMovie('The Shawshank Redemption', 'Inspirational'))
store.dispatch(addMovie('Star Wars', 'Sci-Fi'))
store.dispatch(addMovie('Enter The Dragon', 'Action'))
store.dispatch(removeHobby(1));
store.dispatch(removeMovie(2));
