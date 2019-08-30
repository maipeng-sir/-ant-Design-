import {createAction} from "redux-actions";
import {loginApi} from "@api/users";

const loginAction = createAction("LOGIN_ACTION",val=>val);

export const loginAsyncAction = (username,password)=>{
    return async (dispatch)=>{
        let data = await loginApi(username,password);
        if(data.code == 200){
            //存token顺便告诉组件可以进行跳转了
            sessionStorage.setItem("token",data.data.token);
            dispatch(loginAction(data.data))
            return true;
        }else{
            return false;
        }
       
    }
}