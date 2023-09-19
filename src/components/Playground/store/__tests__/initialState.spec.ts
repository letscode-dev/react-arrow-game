import playgroundReducer, { initialState } from "../slices"

describe("initial state", () => {
  it("check initial state", () => {
    expect(playgroundReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    )
  })
})
