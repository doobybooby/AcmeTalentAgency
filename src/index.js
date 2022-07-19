import { createRoot } from 'react-dom/client';
import React, { Component } from 'react';
import { Provider, connect } from 'react-redux'
import store from './store'

const App = connect(
  state => state,
  dispatch => {
    return {
      loadData: () => console.log('load data')
    }
  }
)(class App extends Component {
  componentDidMount(){
    this.props.loadData()
  }
  render(){
    const { clients, skills } = this.props
    return(
      <div>
        <h1>ACME TALENT AGENCY</h1>
        <main>
          <ul>
            {
              clients.map(client => {
                return (
                  <li>
                    { client.name }
                  </li>
                )
              })
            }
          </ul>
          <ul>
            {
              skills.map(skills => {
                return (
                  <li>
                    { skill.name }
                  </li>
                )
              })
            }
          </ul>
        </main>
      </div>
    )
  }
})

const root = createRoot(document.querySelector('#root'));
root.render(<Provider store={store}><App /></Provider>);
