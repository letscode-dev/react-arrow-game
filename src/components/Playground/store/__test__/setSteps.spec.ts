import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
} from "../slices"

describe("reducer setSteps", () => {
  it("check setSteps", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsSate = playgroundReducer(setCurrentStepState, setSteps())

    const firstStep = {
      step: 1,
      currentValue: setStepsSate.steps[0].currentValue,
      enteredValue: null,
      success: null,
    }

    expect(initialState.steps.length).toEqual(0)
    expect(setStepsSate.steps.length).toEqual(1)
    expect(setStepsSate.steps[0]).toEqual(firstStep)
  })
})
