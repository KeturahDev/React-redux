export default (state = {}, action) => {
  const { name, brand, price, alcoholContent, description, pints, id } = action
  switch(action.type) {
    case "ADD_KEG":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcoholContent: alcoholContent,
          description: description,
          pints: pints,
          id: id
        }
      });
    default:
      return state
  }
}