import formVisibleReducer from "../../reducers/form-visible-reducer"
import kegListReducer from "../../reducers/keg-list-reducer"
import selectedKegReducer from "../../reducers/selected-keg-reducer"
import rootReducer from "./../../reducers"
import {createStore} from "redux"

const store = createStore(rootReducer)

describe("rootReducer", () => {
  test("should return same default state as original reducers", () => {
    expect(rootReducer({}, {type:null})).toEqual({
      formVisible: false,
      kegList: {},
      selectedKeg: {}
    })
  })
  test("should have same default state as original formVisibleReducer", () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(false, {type:null}))
  })
  test("should have same default state as original kegListReducer", () => {
    expect(store.getState().kegList).toEqual(kegListReducer({}, {type:null}))
  })
  test("should have same default state as original selectedKegReducer", () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer({}, {type:null}))
  })
})