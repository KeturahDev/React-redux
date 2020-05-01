import formVisibleReducer from "./../../reducers/form-visible-reducer"

describe("formVisibleReducer", () => {
  let action;
  test("should return default state", () => {
    expect(formVisibleReducer(false, {type:null})).toEqual(false)
  })
  test("should toggle bool return", () => {
    action = {
      type: "TOGGLE_FORM"
    }
    expect(formVisibleReducer(false, action)).toEqual(true)
  })
})