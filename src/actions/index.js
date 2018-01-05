import { Events } from '../constants';
import PDK from 'node-pinterest';

let pinterest = PDK.init('AdDiVeb1lzjy325oWKBIjT4fI4F7FQbX5baRajVEmjEPeCA7YQAAAAA');

const getBoards = (action) => {

  let options = {
    qs: {
      fields: 'id,image,link,url,note,metadata,creator'
    }
  };

  return (dispatch) => {
    pinterest.api('me/pins',options).then( response => 
      dispatch({ type: Events.BOARD_FETCH.SUCCESS, payload: response })
    ).catch(error => {
      dispatch({ type: Events.BOARD_FETCH.ERROR, payload: error });
    });
  }
}

const getBoardsById = (action) => {
  return (dispatch) => {
    pinterest.api('me/boards/'+action).then( response => 
      dispatch({ type: Events.BOARD_FETCH.SUCCESS, payload: response })
    ).catch(error => {
      dispatch({ type: Events.BOARD_FETCH.ERROR, payload: error });
    });
  }
}

const getMember = (action) => {
  return (dispatch) => {
    pinterest.api('me').then( response => 
      dispatch({ type: Events.GET_MEMBER.SUCCESS, payload: response })
    ).catch(error => {
      dispatch({ type: Events.GET_MEMBER.ERROR, payload: error });
    });
  }
}

export const EventDispatcher = {
  getBoards,
  getMember,
  getBoardsById
}