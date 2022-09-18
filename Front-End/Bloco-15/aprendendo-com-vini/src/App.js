import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import Display from './pages/display/Display'
import Form from './pages/form/Form'

class App extends Component {
  render() {
    const { profileIsSaved } = this.props;

    // console.log(profileIsSaved);

    return (
      <div>
        <Switch>
          <Route exact path="/">
            { profileIsSaved ? <Redirect to={'/display'} /> : <Form /> }
          </Route>
          <Route path="/display" component={ Display }/>
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profileIsSaved: state.profile.profileIsSaved,
});

export default connect(mapStateToProps, null)(App);
