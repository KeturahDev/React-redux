import * as a from "./ActionTypes"

export const toggleForm = () => ({
  type: a.TOGGLE_FORM
})

export const addKeg = (newKeg) => {
  const {name, brand, price, alcoholContent, description, pints, id} = newKeg
  return {type: a.ADD_KEG, name, brand, price, alcoholContent, description, pints, id}
}

export const selectKeg = (keg) => {
  const {name, brand, price, alcoholContent, description, pints, id} = keg
  return {type: a.SELECT_KEG, name, brand, price, alcoholContent, description, pints, id}

}