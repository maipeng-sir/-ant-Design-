import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import {getMovie} from "@api/home"
import {getMovieAction} from "@actions/actionCreator"

function* fetchGetMovie(){
    let res = yield getMovie();
    yield put(getMovieAction(res))
}

function* mySaga() {
    yield takeEvery("FETCH_MOVIE_DATA", fetchGetMovie);
}

// function* mySaga() {
//     yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
// }
  
  export default mySaga;