import { combineReducers } from 'redux';
import { getPosts } from '../containers/blogPage/reducers.js';

const rootReducer = combineReducers({
    posts: getPosts
});

export default rootReducer;
