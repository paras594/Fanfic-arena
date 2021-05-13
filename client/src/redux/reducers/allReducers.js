import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import userReducer from "./userReducer.js";

const allReducers = combineReducers({
	auth: authReducer,
	user: userReducer
});

export default allReducers;
