import { Events } from '../constants';

const initialState = {
  fetched: false,
  member: [],
  error: null
};

const userMember = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Events.GET_MEMBER.SUCCESS:
      return { ...state, fetched: true, member: payload };
    case Events.GET_MEMBER.ERROR:
      return { ...state, fetched: false, error: payload };
    default:
      return state;
  }
};

export default userMember;