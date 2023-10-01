import playgroundReducer, {
  initialState,
  setCurrentStep,
  setSteps,
  setUnsuccess,
} from "../slices"

describe("reducer setUnsuccess", () => {
  it("check setUnsuccess", () => {
    const setCurrentStepState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const setStepsSate = playgroundReducer(setCurrentStepState, setSteps())

    const setUnsuccessState = playgroundReducer(setStepsSate, setUnsuccess())

    expect(setUnsuccessState.totalUnsuccessful).toBe(1)
    expect(setUnsuccessState.steps[0].success).toBe(false)
  })
})
