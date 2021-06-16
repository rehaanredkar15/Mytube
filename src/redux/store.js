import { commentListReducer } from './reducers/comments.reducer';
import { homeVideoReducer, selectedVideoReducer, relatedVideoReducer, searchedVideosReducer, subscriptionChannelReducer } from './reducers/video.reducer';
import { createStore,applyMiddleware,combineReducers } from "redux";
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth.reducer';
import {channelDetailsReducer} from './reducers/channel.reducer'


const rootReducer = combineReducers({

    auth: authReducer,
    homeVideos:homeVideoReducer,
    selectedVideo:selectedVideoReducer,
    channelDetails:channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideos:relatedVideoReducer,
    searchedVideos:searchedVideosReducer,
    subscriptionChannel:subscriptionChannelReducer
})
const store = createStore(rootReducer,{},composeWithDevTools(applyMiddleware(thunk)))


//thunk middleware gives the ability to action creator to return a action 
export default store;