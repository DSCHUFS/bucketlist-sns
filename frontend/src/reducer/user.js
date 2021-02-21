const SET_CURRENT_USER = "user/SET_CURRENT_USER";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});

const initialState = {
  user: undefined,
};

export const User = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
