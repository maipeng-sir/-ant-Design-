import {hotBooksApi} from "@api/books";
import {createAction} from "redux-actions";

const hotBooksAction = createAction("HOT_BOOKS",val=>val);

export const hotBooksAsyncAction = ()=>{
    return async (dispatch)=>{
        let data = await hotBooksApi();
       
        dispatch(hotBooksAction(data))
    }
}