export default (state={}, action) => {
  const {name, brand, price, alcoholContent, description, pints, id} = action
  switch(action.type) {
    case "SELECT_KEG":
      state = {[id]:{name,brand,price,alcoholContent,description,pints,id}} 
      return state
    case "REMOVE_KEG":
      state = {}
      return state
    default:
      return state
  }
}