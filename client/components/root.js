import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import {getMe} from '../reducers/logIn&OutReducer'
import Login from './login'
import UserPage from './user-page'
import store from '../store'


class Root extends Component {
  componentDidMount () {
    console.log('im inside root', process.env.GOOGLE_CLIENT_SECRET)
    store.dispatch(getMe())
      .then(() => {
        this.props.history.push('/home')
      })
  }

  render () {
    
    return (
      <Switch>
        <Route path='/home' component={UserPage} />
        <Route component={Login} />
      </Switch>
    )
  }
}

export default withRouter(Root);