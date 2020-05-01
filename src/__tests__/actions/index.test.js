import * as actions from "./../../actions"

describe("application's actions", () => {
  it("should toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({type: "TOGGLE_FORM"})
  })
})