export async function getProduct(age, gender, price, declinedProducts) {
  const prices = createPriceBoundries(price);
  const jsonData = createRequestObject(
    age,
    gender,
    prices[0],
    prices[1],
    declinedProducts
  );

  const url =
    process.env.REACT_APP_CODE_ENVIORNMENT === "dev"
      ? "http://127.0.0.1:3001/api/getProposedItems/"
      : "https://tekado.dev:3001/api/getProposedItems/";

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(jsonData), // body data type must match "Content-Type" header
  });

  let product = await response.json();
  return product;
}

function createPriceBoundries(price) {
  const numberofDigdits = price.toString().length - 1;
  const priceRanges = [0.1, 0.2, 0.3];

  return [
    price * (1 - priceRanges[numberofDigdits]),
    price * (1 + priceRanges[numberofDigdits]),
  ];
}

function createRequestObject(
  age,
  gender,
  priceMin,
  priceMax,
  declinedProducts
) {
  const requestString =
    '{ "userData": {"age":' +
    age +
    ',"gender":"' +
    gender +
    '","price_min":  ' +
    priceMin +
    ',"price_max":  ' +
    priceMax +
    '},"ratedItems": {"itemID":"int","reaction":   "int"},"declinedProducts": ' +
    JSON.stringify(declinedProducts) +
    "}";
  return JSON.parse(requestString);
}
