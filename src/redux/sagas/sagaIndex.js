import { all } from 'redux-saga/effects';
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNews(){
try {
  let response = yield axios.get('/api/news');
  yield put({type: 'SET_NEWS', payload: response});
} catch (error) {
  console.log('error in getNews Saga', error)
}
}

function* newsSaga(){
  yield takeLatest('GET_NEWS', getNews);
}

export default function* rootSaga() {
  yield all([
    newsSaga
  ]);
}