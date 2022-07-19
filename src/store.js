import { applyMiddleware,combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios'
import logger from 'redux-logger';

const clientReducer = (state = [], action )=> {
  switch(action.type){
    case 'SET_CLIENTS':
      return action.clients
  }
  return state
}

const skillsReducer = (state = [], action )=> {
  switch(action.type){
    case 'SET_SKILLS':
      return action.skills
  }
  return state
}
const clientSkillsReducer = (state = [], action )=> {
  switch(action.type){
    case 'SET_CLIENTSKILLS':
      return action.skills
  }
  return state
}

const rootReducer = combineReducers({
  clients: clientReducer,
  skills: skillsReducer,
  clientSkills: clientSkillsReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export const fetchClients = ()=> {
  return async(dispatch)=> {
    const clients = (await axios.get('/api/clients')).data
    dispatch({type: 'SET_CLIENTS', clients})
  }
}
export const fetchSkills = ()=> {
  return async(dispatch)=> {
    const skills = (await axios.get('/api/skills')).data
    dispatch({type: 'SET_SKILLS', skills})
    console.log(dispatch)
  }
}
export const fetchClientSkills = ()=> {
  return async(dispatch)=> {
    const clientSkills = (await axios.get('/api/clientSkills')).data
    dispatch({type:'SET_CLIENTSKILLS', clientSkills})
    console.log(dispatch)
  }
}


export default store