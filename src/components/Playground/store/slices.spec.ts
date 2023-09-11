// import playgroundReducer, {
//   setEnteredValue,
//   setSteps,
//   resetStore,
//   setUnsuccess,
//   setCurrentStep,
//   initialState,
// } from "./slices"

// import { ARR_ARROW_CODES } from "../constants"

// describe("playground reducer", () => {
//   it("check initial state", () => {
//     expect(playgroundReducer(undefined, { type: "unknown" })).toEqual(
//       initialState,
//     )
//   })

//   it("check reducer setCurrentStep", () => {
//     const timerReducerState = playgroundReducer(initialState, setTimer(true))
//     const currentStepReducerState = playgroundReducer(
//       timerReducerState,
//       setCurrentStep(),
//     )

//     expect(timerReducerState.currentStep).toBe(0)
//     expect(currentStepReducerState.currentStep).toBe(1)
//   })

//   it("check reducer setSteps", () => {
//     const timerReducerState = playgroundReducer(initialState, setTimer(true))
//     const currentStepReducerState = playgroundReducer(
//       timerReducerState,
//       setCurrentStep(),
//     )
//     const stepsReducerState = playgroundReducer(
//       currentStepReducerState,
//       setSteps(),
//     )

//     const firstStep = {
//       step: 1,
//       currentValue:
//         stepsReducerState.steps[stepsReducerState.steps.length - 1]
//           .currentValue,
//       enteredValue: null,
//       success: null,
//     }

//     expect(initialState.steps.length).toBe(0)
//     expect(stepsReducerState.steps.length).toBe(1)
//     expect(stepsReducerState.steps[stepsReducerState.steps.length - 1]).toEqual(
//       firstStep,
//     )
//   })

//   it("check reducer setUnsuccess", () => {
//     const timerReducerState = playgroundReducer(initialState, setTimer(true))
//     const currentStepReducerState = playgroundReducer(
//       timerReducerState,
//       setCurrentStep(),
//     )
//     const stepsReducerState = playgroundReducer(
//       currentStepReducerState,
//       setSteps(),
//     )
//     const successReducerState = playgroundReducer(
//       stepsReducerState,
//       setUnsuccess(),
//     )

//     expect(initialState.totalUnsuccessful).toBe(0)
//     expect(successReducerState.totalUnsuccessful).toBe(1)
//   })

//   it("check reducer setEnteredValue", () => {
//     const enteredValue = ARR_ARROW_CODES[0]

//     const timerReducerState = playgroundReducer(initialState, setTimer(true))
//     const currentStepReducerState = playgroundReducer(
//       timerReducerState,
//       setCurrentStep(),
//     )
//     const stepsReducerState = playgroundReducer(
//       currentStepReducerState,
//       setSteps(),
//     )
//     const enteredValueState = playgroundReducer(
//       stepsReducerState,
//       setEnteredValue(enteredValue),
//     )

//     expect(
//       stepsReducerState.steps[enteredValueState.steps.length - 1].enteredValue,
//     ).toBe(null)
//     expect(
//       enteredValueState.steps[enteredValueState.steps.length - 1].enteredValue,
//     ).toBe(enteredValue)
//   })

//   it("check reducer resetStore", () => {
//     const timerReducerState = playgroundReducer(initialState, setTimer(true))
//     const resetReducerState = playgroundReducer(timerReducerState, resetStore())

//     expect(resetReducerState).toEqual(initialState)
//   })
// })
