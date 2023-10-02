import playgroundReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check initial state", () => {
    const setInitialState = playgroundReducer(undefined, { type: "unknown" })

    expect(setInitialState).toEqual(initialState)
  })
})
