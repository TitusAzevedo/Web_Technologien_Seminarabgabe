const {
  getAllItems,
  scoreItems,
  validateTopItems,
  removeDeclinedProducts,
} = require("../services/userService");

/**
 *
 * @param {object} req
 * @param {object} res
 */
const proposeItems = async (req, res) => {
  const userData = req.body.userData; // get's core user data: gender, age, price_min & price_max
  const declinedProducts = req.body.declinedProducts; // get's a list of offer_id's of the products the user declined
  getAllItems((err, items) => {
    //retrieves all items form the tekado_db
    if (err) {
      throw err;
    } else {
      const scoreboard = scoreItems(userData, items); //assignes a score to each item
      const topItems = validateTopItems(scoreboard); //removes all items that aren't availible at yadore anymore
      const itemsPromis = removeDeclinedProducts(topItems, declinedProducts); //removes all items that have been declined by the user
      itemsPromis.then((items) => res.send(items[0])); //awaits the promis and returns the highest item score
    }
  });
};

module.exports = {
  proposeItems,
};
