import { Events } from '../constants';

const initialState = {
  fetched: false,
  boards: [],
  error: null
};

const userBoard = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Events.BOARD_FETCH.SUCCESS:
      return { ...state, fetched: true, boards: payload };
    case Events.BOARD_FETCH.ERROR:
      return { ...state, fetched: false, error: payload };
    default:
      return state;
  }
};

export default userBoard;