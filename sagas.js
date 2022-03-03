import { put, takeEvery, all, delay } from 'redux-saga/effects';

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync);
}

function* dec() {
  yield delay(1000);
  yield put({ type: 'DECREMENT' });
}

function* watchDec() {
  yield takeEvery('DECREMENT_ASYNC', dec);
}

export default function* rootSaga() {
  yield all([watchIncrementAsync(), watchDec()]);
}
