import {v4} from "uuid"

export const id1 = v4()
export const id2 = v4()
export const id3 = v4()
export const id4 = v4()
export const id5 = v4()

export const Kegs = {
  id1: {
    name: "Marry Me Belle",
    brand: "Gaston",
    price: "$11",
    alcoholContent: "12%",
    description: "My specially made Vodka cocktail to get Belle to losen up and just marry me like I know she should.",
    pints: 124,
    id: id1
  },
  id2:{
    name: "Antler Decor",
    brand: "BuckWiser",
    price: "$8",
    alcoholContent: "6%",
    description: "A quality light beer for my lightweight friends to sit back and enjoy my decor.",
    pints: 124,
    id: id2
  },
  id3:{
    name: "Egged Barge",
    brand: "Gaston",
    price: "$15",
    alcoholContent: "9%",
    description: "Spiked Eggnog to meet my 5 dozen egg standards.",
    pints: 124,
    id: id3
  },
  id4:{
    name: "Lady Lifts",
    brand: "BlueBarrel",
    price: "$6",
    alcoholContent: "5%",
    description: "A light beer for the ladies to sip on while I raise there tables.",
    pints: 124,
    id: id4
  },
  id5:{
    name: "Kill the Beast",
    brand: "MonsterMan",
    price: "$10",
    alcoholContent: "9%",
    description: "A pre pitchfork raising rum to get in the hero's spirit. Ride with me brothers!",
    pints: 124,
    id: id5
  }
}