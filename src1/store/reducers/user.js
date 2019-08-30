import {handleActions} from "redux-actions";

const defaultState = {
    userInfo:""
}

export default handleActions({
    LOGIN_ACTION:(state,action)=>{
        let userState = Object.assign({},state);
        userState.userInfo = action.payload.userinfo;
       
        sessionStorage.setItem("userInfo",action.payload.userinfo)
        return userState;
    }
},defaultState);