import { CREATE_USER } from "../constants/ActionTypes";

const initialState = {
  users: []
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: return { ...state, users: [...state.users, action.payload] };
    default:return state;
  }
};
export default UserReducer;