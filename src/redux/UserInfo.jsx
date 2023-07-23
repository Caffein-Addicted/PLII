const GET_USER_INFO = 'GET_USER_INFO';
const RESET_USER_INFO = 'RESET_USER_INFO';

export const getUserInfo = (payload) => {
  return {
    type: GET_USER_INFO,
    payload
  };
};

export const resetUserInfo = () => {
  return {
    type: RESET_USER_INFO
  };
};

const initialState = [];

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.payload;
    case RESET_USER_INFO:
      return initialState; // 초기 상태로 되돌림
    default:
      return state;
  }
};

export default userInfo;
