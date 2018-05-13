import { CREATE_USER } from "../constants/ActionTypes";

export const addUser = user => ({ 
    type: CREATE_USER,
    payload: user 
});
