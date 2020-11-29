import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, useParams } from 'react-router-dom'

import './index.css'

class Index extends Component {
  constructor(props){
    super(props)
  }
  render() {
    console.log(this.props)
    return (
      <div className='index'>
        Index page
      </div>
    )
  }
}

class About extends Component {
  render() {
    return (
      <div className='about'>
        About page
      </div>
    )
  }
}
class User extends Component{
  render() {
    return (
      <div className='user'>
        User page
      </div>
    )
  }
}
class UserInfo extends Component {
  render() {
    return (
      <div className='userinfo'>
        UserInfo page
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='App'>
        <Router>
            <Route path="/" exact={true} component={Index} />
            <Route path="/index" exact={true} component={Index}/>
            <Route path="/about" component={About} />
            <Route path="/user/userinfo" component={UserInfo} />
            <Route path="/user" component={User} />
        </Router>
      </div>
    )
  }
}

export default App