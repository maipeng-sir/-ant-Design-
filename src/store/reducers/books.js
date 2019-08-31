import {handleActions} from "redux-actions";
const defaultState = {
    hotbooks:[],
    count:0
}
export default handleActions({
    HOT_BOOKS:(state,action)=>{
        let hotState = Object.assign({},state);
        hotState.hotbooks = action.payload.data.list;
        hotState.count = action.payload.count;
        console.log(hotState)
        return hotState;
    }
},defaultState);