import React, { Component } from 'react'
//import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, useParams } from 'react-router-dom'
//import { HashRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from './react-router-dom'

import './index.css'

class Index extends Component {
  constructor(props) {
    super(props)
  }
  render() {
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
class User extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='user'>
        User page
      </div>
    )
  }
}
class UserInfo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const id = this.props.match.params.id
    return (
      <div className='userinfo'>
        User By Id is {id} pages
      </div>
    )
  }
}
class Password extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='password'>
        User password pages
      </div>
    )
  }
}
class NotFound extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='notfound'>
        Not Found pages
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
          <Link to='/index'>首页</Link>
          <Link to='/user'>用户页面</Link>
          <Link to='/user/123'>个人中心</Link>
          <Link to='/user/password'>用户密码</Link>
          <Link to='/about'>关于我们</Link>
          <Switch>
            <Route path='/' exact={true} component={Index} />
            <Route path="/index" exact={true} component={Index} />
            <Route path='/user' exact={true} component={User} />
            <Route path='/user/password' exact={true} component={Password} />
            <Route path='/user/:id' component={UserInfo} />
            <Route path='/about' component={About} />
            <Route path='/notfound' component={NotFound} />
            <Redirect to='/notfound' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App