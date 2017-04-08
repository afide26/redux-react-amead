import redux, {combineReducers, createStore, compose} from 'redux'
// Reducers
import {nameReducer} from './name_reducer'
import {hobbiesReducer} from './hobbies_reducer'
import {moviesReducer} from './movies_reducer'
import {mapReducer} from './map_reducer'

export const reducer = combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer,
  map: mapReducer
})
