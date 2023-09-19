import playgroundReducer, {
  initialState,
  setSteps,
  setCurrentStep,
  setEnteredValue,
} from "../slices"
import { ARR_ARROW_CODES } from "../../constants"

describe("reducer setEnteredValue", () => {
  it("check enteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]

    const setCurrentStepReducerState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsReducerState = playgroundReducer(
      setCurrentStepReducerState,
      setSteps(),
    )

    const setEnteredValueReducerState = playgroundReducer(
      setStepsReducerState,
      setEnteredValue(enteredValue),
    )

    expect(setStepsReducerState.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueReducerState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepReducerState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsReducerState = playgroundReducer(
      setCurrentStepReducerState,
      setSteps(),
    )

    const setEnteredValueReducerState = playgroundReducer(
      setStepsReducerState,
      setEnteredValue(setStepsReducerState.steps[0].currentValue),
    )

    expect(setStepsReducerState.totalSuccessful).toBe(0)
    expect(setStepsReducerState.totalUnsuccessful).toBe(0)
    expect(setEnteredValueReducerState.totalSuccessful).toBe(1)
    expect(setEnteredValueReducerState.totalUnsuccessful).toBe(0)
  })
})
