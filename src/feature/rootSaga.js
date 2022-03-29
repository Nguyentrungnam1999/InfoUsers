import { call, all } from 'redux-saga/effects';
import { getUser } from './saga';

export default function* rootSaga() {
  yield all([getUser()]);
}
