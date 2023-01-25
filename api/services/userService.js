const db = require("./db.js");

/**
 * Gets all items from tekado_db
 * @param {function} callback
 */
const getAllItems = async (callback) => {
  await db.query(
    `SELECT offer_id, d_preis, p_gender, p_age_min, p_age_max, p_title, p_description FROM items`,
    (err, res) => {
      if (err) throw err;
      callback(null, res);
    }
  );
};

/**
 * Master functiuon that assigns every item in the array a score.
 * Every parameter has it's own function tht returns the subscore wich is added to the
 * total score. The return value is an array of objcts each representing one item
 *
 * @param {Object} userData
 * @param {array} items
 * @returns
 */
const scoreItems = (userData, items) => {
  let scoreboard = [];
  for (let i = 0; i < items.length; i++) {
    //creates base dictionary with static values like the id, name, description and price
    scoreDic = {
      offer_id: items[i].offer_id,
      score: 0,
      name: items[i].p_title,
      description: items[i].p_description,
      price: items[i].d_preis,
    };

    scoreDic["score"] += scoreGender(userData.gender, items[i].p_gender);
    scoreDic["score"] += scoreAge(
      userData.age,
      items[i].p_age_min,
      items[i].p_age_max
    );
    scoreDic["score"] += scorePrice(
      userData.price_min,
      userData.price_max,
      items[i].d_preis
    );
    scoreboard.push(scoreDic);
  }
  scoreboard = sortDict(scoreboard);
  return scoreboard;
};

/**
 * This function takes the gender given from the user and the items from the database nad calculates a score for
 * each item. The Score is returned as an array. Each Score in this array is assigned to the item with the same
 * index in the items array queryied from the database.
 *
 * @param {string} gender
 * @param {array} items
 * @returns Array with scores
 */
const scoreGender = (userGender, itemGender) => {
  if (itemGender == userGender) {
    return 100;
  } else {
    return 50;
  }
};

/**
 *
 * @param {int} age
 * @param {array} items
 * @returns
 */
const scoreAge = (userAge, itemAgeMin, itemAgeMax) => {
  if (itemAgeMin <= userAge <= itemAgeMax) {
    return 75;
  } else if (itemAgeMin * 0.9 <= userAge <= itemAgeMax * 1.1) {
    return 25;
  }
};

/**
 * TODO ranges
 * @param {float} userPriceMin
 * @param {float} userPriceMax
 * @param {float} itemPrice
 * @returns
 */
const scorePrice = (userPriceMin, userPriceMax, itemPrice) => {
  const numberofDigdits = itemPrice.toString().length - 1;
  const priceRanges = [0.1, 0.2, 0.3];
  if (userPriceMin <= itemPrice <= userPriceMax) {
    return 100;
  } else if (
    userPriceMin * (1 - priceRanges[numberofDigdits]) <=
    itemPrice <=
    userPriceMax * (1 + priceRanges[numberofDigdits])
  ) {
    return 75;
  }
};

/**
 *
 * @param {*} dict
 */
const sortDict = (input) => {
  return input.sort(function (a, b) {
    if (a.score < b.score) return 1;
    if (a.score > b.score) return -1;
    return 0;
  });
};

/**
 * Removes the items that aren't availible anymore on yadore
 * @param {array} scoreboard
 * @returns
 */
const validateTopItems = async (scoreboard) => {
  const topItems = scoreboard.map(async (tekadoItem) => {
    //iterates over the array
    const yadoreItem = await getItemFromYadore(tekadoItem.offer_id); //requests the item data from the yadore api
    if (yadoreItem != 1) {
      return createResponseItem(tekadoItem, yadoreItem); //if the item exists it is parsed into the correct syntax and returned
    } else {
      //TODO mark item for deletion
    }
  });

  return await (await Promise.all(topItems)).filter((n) => n);
};

/**
 * Removes all items that the user already declined. The array with the corresponding offer_id's is passed in the request to the api.
 * @param {Promise} topItemsPromis
 * @param {array} declinedProducts
 * @returns
 */
const removeDeclinedProducts = async (topItemsPromis, declinedProducts) => {
  const topItems = await topItemsPromis;
  let topFilteredItems = [];
  topItems.map((item) => {
    if (!declinedProducts.includes(item.offer_id)) {
      topFilteredItems.push(item);
    }
  });
  return topFilteredItems;
};

/**
 * Requests the data for a item from yadore by offer_id
 * @param {string} offer_id
 * @returns
 */
const getItemFromYadore = async (offer_id) => {
  const response = await fetch(
    "https://api.yadore.com/v2/offer?market=de&offerId=" +
      offer_id +
      "&precision=fuzzy&sort=rel_desc&limit=1",
    {
      headers: {
        'accept': "application/json",
        "content-Type": "application/json",
        "API-Key":
          "Nc3C5hzqx57hNbkNZxtjSv3QC6Rz8ItZN9bddJXE7lTGw8BApWiCC5xOtcSVh6MF",
      },
      method: "GET",
    }
  );

  const responseJSON = await response.json();
  if (responseJSON["count"] > 0) {
    return responseJSON["offers"][0];
  } else {
    return 1;
  }
};

/**
 * Adds the image URL and product URL to the item object
 * @param {Object} tekadoItem 
 * @param {Object} yadoreItem 
 * @returns 
 */
const createResponseItem = (tekadoItem, yadoreItem) => {
  tekadoItem.imageUrl = yadoreItem.image.url;
  tekadoItem.productUrl = yadoreItem.clickUrl;
  return tekadoItem;
};

module.exports = {
  getAllItems,
  scoreItems,
  scoreGender,
  scoreAge,
  validateTopItems,
  removeDeclinedProducts,
};
