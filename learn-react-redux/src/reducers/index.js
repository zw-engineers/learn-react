import {combineReducers} from "redux";
import {postReducer} from "./postReducer";

combineReducers({
    posts: postReducer
});