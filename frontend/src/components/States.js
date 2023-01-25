import { atom } from "recoil";

const questionState = atom({
  key: "questionID",
  default: 0,
});

const genderState = atom({
  key: "gender",
  default: "",
});

const priceState = atom({
  key: "price_min",
  default: "0",
});

const ageState = atom({
  key: "age",
  default: "0",
});

const productState = atom({
  key: "product",
  default: [],
});

const declinedProductsState = atom({
  key: "declinedProducts",
  default: [],
});

export {
  questionState,
  genderState,
  priceState,
  ageState,
  declinedProductsState,
  productState,
};
