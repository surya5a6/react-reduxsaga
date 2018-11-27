import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import client from './client/reducer';
import signup from './signup/reducer';
import login from './login/reducer';
import posts from './components/posts/reducers';

const IndexReducer = combineReducers({
    posts,
    client,
    signup,
    login,
    form
    }
)

export default IndexReducer;