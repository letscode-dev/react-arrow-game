import playgroundReducer, {
  initialState,
  setCurrentStep,
  resetStore,
} from "../slices"

describe("reducer resetStore", () => {
  it("check resetStore", () => {
    const setCurrentStepReducerState = playgroundReducer(
      initialState,
      setCurrentStep(),
    )

    const resetStoreReducerState = playgroundReducer(
      setCurrentStepReducerState,
      resetStore(),
    )

    expect(resetStoreReducerState).toEqual(initialState)
  })
})
