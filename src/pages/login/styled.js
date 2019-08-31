import styled from "styled-components"
import bg from "@static/bg.jpg"
export const LoginWrapper = styled.div`
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        background:url(${bg});
        &>div{
            width:500px;
            background:rgba(255,255,255,.6);
            padding:20px;
            border-radius:10px;
            form{
                margin-top:10px;
            }
        }
        .logo{
            width:100%;
            height:50px;
            display:flex;
            justify-content:center;
            align-items:center;
            img:nth-child(1){
                width:32px;
                height:32px;
                margin-right:10px;
            }
            img:nth-child(2){
                width:84px;
                height:16px;
            }
        }
`