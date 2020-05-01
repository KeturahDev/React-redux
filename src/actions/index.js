import * as a from "./ActionTypes"

export const toggleForm = () => ({
  type: a.TOGGLE_FORM
})

// export const addKeg = (newKeg) => {
//   const {name, brand, price, alcoholContent, description, pints, id} = newKeg
//   return {type: a.ADD_KEG, name, band, price, alcoholContent, description, pints, id}
// }