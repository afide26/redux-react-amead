// Changing Name

export const changeName = (name)=>{
  return(
    {
      type: 'CHANGE_NAME',
      name: name
    }
  )
}


// Adding Hobby
export const addHobby = (name)=>{
  return(
    {
      type: 'ADD_HOBBY',
      name
    }
  )
}

// Removing Hobby
export const removeHobby = (id)=>{
  return(
    {
      type: 'REMOVE_HOBBY',
      id
    }
  )
}

// Action generators for movies

export const addMovie = (title, genre)=>{
  return(
    {
      type: 'ADD_MOVIE',
      title,
      genre
    }
  )
}

export const removeMovie = (id)=>{
  return(
    {
      type: 'REMOVE_MOVIE',
      id
    }
  )
}

export const startLocationFetch = ()=>{
  return(
    {
      type:'START_LOCATION_FETCH'
    }
  )
}

export const completeLocationFetch = (url)=>{
  return(
    {
      type:'COMPLETE_LOCATION_FETCH',
      url
    }
  )
}
