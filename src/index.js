import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import store, { fetchClients, fetchSkills, fetchClientSkills} from './store'
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Home';


const App = connect(
  state => state,
  dispatch => {
    return {
      loadData: () => {
        dispatch(fetchClients())
        dispatch(fetchSkills())
        dispatch(fetchClientSkills())
      }
    }
  }
)(class App extends Component {
  componentDidMount(){
    this.props.loadData()
  }
  render(){
    const { clients, skills, clientSkills } = this.props
    return(
      <div>
        <Link to='/'>
          <h1>ACME TALENT AGENCY</h1>
        </Link>
        <Routes >
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </div>
    )
  }
})

const root = createRoot(document.querySelector('#root'));
root.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>);
