import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getNews(){
  console.log('in getNews');
try {
  let response = yield axios.get('/api/news');
  yield put({type: 'SET_NEWS', payload: response});
} catch (error) {
  console.log('error in getNews Saga', error)
}
}

export default function* rootSaga(){
  yield takeLatest('GET_NEWS', getNews);
}