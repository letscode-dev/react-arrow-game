import playgroundReducer, {
  initialState,
  setUnsuccess,
  setSteps,
  setCurrentStep,
} from "../slices"

describe("reducer setUnsuccess", () => {
  it("check totalUnsuccessful and success", () => {
    const setCurrentStepReducerState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsReducerState = playgroundReducer(
      setCurrentStepReducerState,
      setSteps(),
    )

    const setUnsuccessReducerState = playgroundReducer(
      setStepsReducerState,
      setUnsuccess(),
    )

    expect(setUnsuccessReducerState.totalUnsuccessful).toBe(1)
    expect(setUnsuccessReducerState.steps[0].success).toBe(false)
  })
})
