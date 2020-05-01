import formVisibleReducer from "./../../reducers/form-visible-reducer"

describe("formVisibleReducer", () => {
  test("should return default state", () => {
    expect(formVisibleReducer(false, {type:null})).toEqual(false)
  })
})