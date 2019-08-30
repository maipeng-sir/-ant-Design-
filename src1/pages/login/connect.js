import {loginAsyncAction} from "@actions/login"
import { message } from 'antd';
export const mapStateToProps = (state)=>({

})

export const mapDispatchToProps = (dispatch)=>({
   async handleLogin(usersname,password){
        let flag = await dispatch(loginAsyncAction(usersname,password))
        if(flag){
            message.success("登陆成功",2,()=>{
                this.history.push("/home")
            })
          
        }else{
            this.history.push("/login")
        }
    }
})