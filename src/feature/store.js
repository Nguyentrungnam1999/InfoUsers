import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './rootSaga'
import userSlice from './reducerslice'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    rootReducer: userSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
})
sagaMiddleware.run(rootSaga)
export default store
