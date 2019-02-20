import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'


const Root = (props) => {
  console.log(props.puppies.puppy.name)
  return (
    <div>
      <h1>{props.puppies.puppy.name}</h1>
    </div>
  )
}

const mapStateToProps = ( state ) => ({
  puppies: state.puppies
})

export default connect(mapStateToProps)(Root);
