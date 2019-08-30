import {fetch as fetchPolyfill} from "whatwg-fetch";
import qs from "qs";
const get = (url)=>{
    var result = fetchPolyfill(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },    
   })
   .then(res=>res.json());
   
   return result
}

const post = (url,data)=>{
    var result = fetch(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: qs(data)
    })
    .then(res=>res.json())
    
    return result;
}

export default {
    get,
    post
}