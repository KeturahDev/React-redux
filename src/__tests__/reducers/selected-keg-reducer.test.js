import selectedKegReducer from "./../../reducers/selected-keg-reducer"

describe("selectedKegReducer", () => {
  let action;
  const selectedKeg = {
    name: "Egged Barge",
    brand: "Gaston",
    price: "$15",
    alcoholContent: "9%",
    description: "Spiked Eggnog to meet my 5 dozen egg standards.",
    pints: 124,
    id: 3
  }
  // for 3rd test
  const { name, brand, price, alcoholContent, description, pints, id } = selectedKeg
  const addKegAction = { type: "SELECT_KEG", name, brand, price, alcoholContent, description, pints, id }

  test("should return default empty object", () => {
    expect(selectedKegReducer({}, { type: null })).toEqual({})
  })
  test("should add selected keg", () => {
    const { name, brand, price, alcoholContent, description, pints, id } = selectedKeg
    action = { type: "SELECT_KEG", name, brand, price, alcoholContent, description, pints, id }
    expect(selectedKegReducer({}, action)).toEqual(
      {
        name: "Egged Barge",
        brand: "Gaston",
        price: "$15",
        alcoholContent: "9%",
        description: "Spiked Eggnog to meet my 5 dozen egg standards.",
        pints: 124,
        id: 3
      })
  })
  test("should set selected keg to an empty object", () => {
    const prevState = selectedKegReducer({}, addKegAction)
    action = {
      type: "REMOVE_KEG"
    }
    expect(selectedKegReducer(prevState, action)).toEqual({})
  })
})