import React ,{ Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { EventDispatcher } from './actions';
import BoardIdComp from './components/BoardIdComp';
import ViewPin from './components/ViewPin';

class BoardRoute extends Component {
  constructor() {
    super();

    this.state = {
      pin: {},
      selectedPin: false
    }
  }

  componentDidMount() {
    this.props.getBoards();
  }

  getBoardById(boardId) {
    this.props.getBoardsById(boardId);
  }

  onSelectHandler(boardName){
    this.setState({pin: boardName, selectedPin: true});
  }

  renderBoard() {
    const { boards } = this.props.board;
    const { data } = boards;
    if(data) {
      return (
        <ul className="board-list">
          {(data.map( (boardName, i) => (
            <BoardIdComp key={i} boardData={boardName} onClick={this.onSelectHandler.bind(this)}/>
          )))}
        </ul>
      );
    }else{
      return <div>Fetching...</div>
    }
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
        <ViewPin pinData={this.state.pin} show={this.state.selectedPin}/>
      </div>
    );
  }
}

const dispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBoards: EventDispatcher.getBoards,
    getBoardsById: EventDispatcher.getBoardsById
  }, dispatch);
};

const stateToProps = (state) => {
  return {
    board: state.board
  };
};

export default connect(stateToProps, dispatchToProps)(BoardRoute);