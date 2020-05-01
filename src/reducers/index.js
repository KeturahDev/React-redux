import formVisibleReducer from "./form-visible-reducer"
import kegListReducer from "./keg-list-reducer"
import selectedKegReducer from "./selected-keg-reducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
  formVisible: formVisibleReducer,
  kegList: kegListReducer,
  selectedKeg: selectedKegReducer
})
export default rootReducer