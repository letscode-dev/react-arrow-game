import { ARR_ARROW_CODES } from "../../constants"
import playgroundReducer, {
  initialState,
  setCurrentStep,
  setEnteredValue,
  setSteps,
} from "../slices"

describe("reducer setEnteredValue", () => {
  it("check enteredValue", () => {
    const enteredValue = ARR_ARROW_CODES[0]

    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsSate = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsSate,
      setEnteredValue(enteredValue),
    )

    expect(setStepsSate.steps[0].enteredValue).toBe(null)
    expect(setEnteredValueState.steps[0].enteredValue).toBe(enteredValue)
  })

  it("check totalSuccessful and totalUnsuccessful", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsSate = playgroundReducer(setCurrentStepState, setSteps())

    const setEnteredValueState = playgroundReducer(
      setStepsSate,
      setEnteredValue(setStepsSate.steps[0].currentValue),
    )

    expect(setStepsSate.totalSuccessful).toBe(0)
    expect(setStepsSate.totalUnsuccessful).toBe(0)
    expect(setEnteredValueState.totalSuccessful).toBe(1)
    expect(setEnteredValueState.totalUnsuccessful).toBe(0)
  })
})
