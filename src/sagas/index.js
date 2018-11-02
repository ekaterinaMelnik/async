import {put, takeEvery, call, all} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {errorHits, updateHits} from "../actions";

function* fetchData() {
    try {
        const response = yield call(fetch, 'https://pixabay.com/api/?key=2980920-46f1aa264b036ffc6e45ebad0&orientation=vertical&q=robot&min_height=500');
        const data = yield call([response, response.json]);
        yield call(delay, 1500);
        yield put(updateHits(data));
    }
    catch (error) {
        yield put(errorHits(error));
    }
}

function* watchFetchData() {
    yield takeEvery('FETCH_REQUEST', fetchData);
}


export default function* rootSaga() {
    yield all([
        watchFetchData()
    ]);
}