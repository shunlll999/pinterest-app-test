import React, { Component } from 'react';


import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { EventDispatcher } from './actions';
import MemberComp from './components/MemberComp';
import BoardRoute from './BoardRoute';
import BoardIdComp from './components/BoardIdComp';



class App extends Component {
  componentDidMount() {
    this.props.getMember();
  }

  render() {
    return (
      <div>
        <HashRouter>
        <div>
          <div className="app-title">
            <h1>Pinterest Board</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/pins">Pins</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route path="/" component={MemberComp}/>
            <Route path="/pins" component={BoardRoute}/>
            <Route path="/pins/show:id" component={BoardIdComp}/>
          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBoards: EventDispatcher.getBoards,
    getMember: EventDispatcher.getMember
  }, dispatch);
};

const stateToProps = (state) => {
  return {
    boards: state.boards,
    member: state.member
  };
};

export default connect(stateToProps, dispatchToProps)(App);
