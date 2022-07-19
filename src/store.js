import { combineReducers, createStore } from 'redux';



const clientReducer = (state = [], action )=> {
  return state
}

const skillsReducer = (state = [], action )=> {
  return state
}
const clientSkillsReducer = (state = [], action )=> {
  return state
}

const rootReducer = combineReducers({
  clients: clientReducer,
  skills: skillsReducer,
  clientSkills: clientSkillsReducer
})

const store = createStore(rootReducer);

export default store