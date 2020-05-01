export default (state={}, action) => {
  const {name, brand, price, alcoholContent, description, pints, id} = action
  switch(action.type) {
    case "SELECT_KEG":
      return {
        [id]:{
          name,
          brand,
          price,
          alcoholContent,
          description,
          pints,
          id
        }
      }
    default:
      return state
  }
}