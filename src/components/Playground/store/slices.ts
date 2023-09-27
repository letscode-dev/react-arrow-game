import { createSlice } from "@reduxjs/toolkit"

import { ARR_ARROW_CODES } from "../constants"
import { IPlaygroundState } from "./types"

export const initialState: IPlaygroundState = {
  currentStep: 0,
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
        const step = state.steps[state.currentStep - 1]
        const isSuccess = step.currentValue === action.payload

        if (step.enteredValue === null) {
          state.steps[state.currentStep - 1] = {
            ...step,
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
      if (state.steps.length) {
        const step = state.steps[state.currentStep - 1]

        if (step.enteredValue === null) {
          state.totalUnsuccessful += 1
          state.totalSuccessful = 0

          state.steps[state.currentStep - 1] = {
            ...step,
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
