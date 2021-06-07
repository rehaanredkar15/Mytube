import { homeVideoReducer } from './reducers/video.reducer';
import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';


const rootReducer = combineReducers({

    auth: authReducer,
    homeVideos:homeVideoReducer
})
const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))


//thunk middleware gives the ability to action creator to return a action 
export default store;