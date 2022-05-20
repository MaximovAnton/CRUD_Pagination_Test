import './App.css';
import Navbar from './Components/Navbar/Navbar'
import UsersContainer from './Components/Users/UsersContainer';
import { Route } from 'react-router-dom'
import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { initializeApp } from './Redux/app-reducer'
import Preloader from './Components/Common/Preloader/Preloader'

class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App-wrapper">
        <Navbar />
        <div className='app-wrapper-content'>
          <Route exact path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isFetching: state.usersPage.isFetching
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
