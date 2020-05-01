import {combineReducers} from "redux"
import formVisibleReducer from "../../reducers/form-visible-reducer"
import kegListReducer from "../../reducers/keg-list-reducer"
import selectedKegReducer from "../../reducers/selected-keg-reducer"
import rootReducer from "./../../reducers"

describe("rootReducer", () => {
  test("should return same default state as original reducers", () => {
    expect(rootReducer({}, {type:null})).toEqual({
      formVisible: false,
      kegList: {},
      selectedKeg: {}
    })
  })
})