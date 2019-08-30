import {handleActions} from "redux-actions"
const defaultState = {

}

export default handleActions({
    //redux-promise-middleware
    MOVIE_DATA_FULFILLED:(state,action)=>{
        console.log(state,action);
        return state;
    },
    //redux-thunk
    MOVIE_DATA:(state,action)=>{
        console.log(state,action);
        return state;
    }
},defaultState)