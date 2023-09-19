import playgroundReducer, { initialState, setCurrentStep } from "../slices"

describe("reducer setCurrentStep", () => {
  it("check currentStep", () => {
    const setCurrentStepReducerState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    expect(initialState.currentStep).toBe(0)
    expect(setCurrentStepReducerState.currentStep).toBe(1)
  })
})
