import {createAction} from 'redux-actions';
import {getMovie} from "@api/home.js"
//redux-promise-middleware
// export const getMovieAction = createAction("MOVIE_DATA",async ()=>{
//         let data = getMovie();
//         return data;
// })

//reudx-thunk
// const getMovieAction = createAction("MOVIE_DATA")
// export const getMovieActionAsync =  ()=>{ 
    
//     return async (dispatch)=>{
//         let data = await getMovie();
//         dispatch(getMovieAction(data))
//     }
// }


export const getMovieAction = createAction("MOVIE_DATA");

export const getMovieFetchAction = createAction("FETCH_MOVIE_DATA");