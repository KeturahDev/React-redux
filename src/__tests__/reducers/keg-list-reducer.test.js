import kegListReducer from "./../../reducers/keg-list-reducer"

describe("kegListReducer", () => {
  test("should return default state", () => {
    expect(kegListReducer({}, {type:null})).toEqual({})
  })
})