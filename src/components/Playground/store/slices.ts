import { createSlice } from "@reduxjs/toolkit"

import { ARR_ARROW_CODES } from "../constants"
import { IPlaygroundState } from "./types"

export const initialState: IPlaygroundState = {
  currentStep: 0,
  isTimer: false,
  totalSuccessful: 0,
  totalUnsuccessful: 0,
  steps: [],
}

export const playgroundSlice = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: (state) => {
      state.currentStep += 1
    },

    setSteps: (state) => {
      const randomKey = Math.floor(Math.random() * ARR_ARROW_CODES.length)

      state.steps.push({
        step: state.currentStep,
        currentValue: ARR_ARROW_CODES[randomKey],
        enteredValue: null,
        success: null,
      })
    },

    setEnteredValue: (state, action) => {
      if (state.steps.length) {
        const enteredValue = state.steps[state.currentStep - 1].enteredValue
        const currentValue = state.steps[state.currentStep - 1].currentValue
        const isSuccess = currentValue === action.payload ? true : false

        if (enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...state.steps[state.currentStep - 1],
            enteredValue: action.payload,
            success: isSuccess,
          }

          if (isSuccess) {
            state.totalSuccessful += 1
          } else {
            state.totalUnsuccessful += 1
            state.totalSuccessful = 0
          }
        }
      }
    },

    setUnsuccess: (state) => {
      if (state.currentStep > 0) {
        const enteredValue = state.steps[state.currentStep - 1].enteredValue

        if (enteredValue === null) {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0

          state.steps[state.currentStep - 1] = {
            ...state.steps[state.currentStep - 1],
            success: false,
          }
        }
      }
    },

    resetStore: () => initialState,
  },
})

export const {
  setCurrentStep,
  setSteps,
  setEnteredValue,
  setUnsuccess,
  resetStore,
} = playgroundSlice.actions

export default playgroundSlice.reducer
