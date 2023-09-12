import { put, takeEvery, all, select } from "redux-saga/effects"

import { setSteps, setUnsuccess, setCurrentStep, setAsync } from "./slices"
import { getTimerSelector } from "./selectors"
import { INTERVAL_TIME } from "../constants"

export const timeout = () =>
  new Promise((res) => setTimeout(res, INTERVAL_TIME))

export function* setCurrentStepAsync() {
  // Данные напрямую из Store (нужно сделать import store)
  // const isTimer = store.getState().playground.isTimer

  // Данные из Селектора
  const isTimer: boolean = yield select(getTimerSelector)

  if (isTimer) {
    yield timeout()

    yield put(setUnsuccess())
    yield put(setCurrentStep())
    yield put(setSteps())
    yield put(setAsync())
  }
}

export function* watchSetCurrentStepAsync() {
  yield takeEvery(setAsync, setCurrentStepAsync)
}

export default function* rootSaga() {
  yield all([watchSetCurrentStepAsync()])
}
