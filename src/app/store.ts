import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../components/Counter/counterSlice"
import playgroundReducer from "../components/Playground/playgroundSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    playground: playgroundReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
