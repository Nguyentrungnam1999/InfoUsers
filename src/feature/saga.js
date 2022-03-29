import { call, all, takeLatest, put } from 'redux-saga/effects';
import { getListUser } from './reducerslice';

export function* getUser() {
  try {
    const user = yield call(() =>
      fetch('https://jsonplaceholder.typicode.com/users'),
    );
    const formattedCats = yield user.json();
    // const formattedCatsShortened = formattedCats.slice(0, 10);
    // console.log(formattedCatsShortened)
    yield put(getListUser(formattedCats));
  } catch (error) {
    console.log(error);
  }
}
