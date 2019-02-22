// import React from 'react';
// import {
//   BrowserRouter as Router,
//   Link,
//   Route,
//   Switch
// } from 'react-router-dom';
// import { connect } from 'react-redux'


// const Root = (props) => {
//   return (
//     <div>
//       <h1>{props.puppies.puppy.name}</h1>
//     </div>
//   )
// }

// const mapStateToProps = ( state ) => ({
//   puppies: state.puppies
// })

// export default connect(mapStateToProps)(Root);

import React, {Component} from 'react'

import {Route, Switch, withRouter} from 'react-router-dom'

import {getMe} from '../reducers/logIn&OutReducer'
import Login from './login'
import UserPage from './user-page'
import store from '../store'



const Root = withRouter(class extends Component {
  
  componentDidMount () {
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
})

export default Root;