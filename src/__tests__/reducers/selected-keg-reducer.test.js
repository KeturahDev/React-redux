import selectedKegReducer from "./../../reducers/selected-keg-reducer"

describe("selectedKegReducer", () => {
  test("should return default empty object", () => {
    expect(selectedKegReducer({}, {type:null})).toEqual({})
  })
})