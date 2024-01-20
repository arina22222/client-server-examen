import { combineReducers } from "redux";
import someReducer from "./reducers/someReducer";

const createRootReducer = combineReducers({
  someReducer,
});

export default  createRootReducer;