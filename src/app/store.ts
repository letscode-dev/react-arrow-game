import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"

import playgroundReducer from "../components/Playground/store/slices"
import rootSaga from "../components/Playground/store/sagas"

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    playground: playgroundReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
