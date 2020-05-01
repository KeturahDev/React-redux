import * as actions from "./../../actions"

describe("application's actions", () => {
  const newKeg = {
    name: "Covered in Hair",
    brand: "MansLiquor",
    price: "$11",
    alcoholContent: "10%",
    description: "Every inch! *rips off shirt*",
    pints: 124,
    id: 9
  }
  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({type: "TOGGLE_FORM"})
  })
  it("addKeg should create ADD_KEG action", () => {
    expect(actions.addKeg(newKeg)).toEqual({
      type: "ADD_KEG",
      name: "Covered in Hair",
      brand: "MansLiquor",
      price: "$11",
      alcoholContent: "10%",
      description: "Every inch! *rips off shirt*",
      pints: 124,
      id: 9
    })
  })
})