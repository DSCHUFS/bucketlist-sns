const db = require("../config/database");
const {
  SEARCH_TITLE,
  SEARCH_CONTENT,
  SEARCH_TAG,
} = require("../queries/search");

const findBucketByTitle = async (req, res) => {
  try {
    const { searchString } = req.params;
    let result = await db.promise().query(SEARCH_TITLE, [searchString]);
    console.log(result[0]);
    res.status(200).json({ result: result[0] });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

const findBucketByContent = async (req, res) => {
  try {
    const { searchString } = req.params;
    let result = await db.promise().query(SEARCH_CONTENT, [searchString]);
    console.log(result[0]);
    res.status(200).json({ result: result[0] });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

const findBucketByTag = async (req, res) => {
  try {
    const { searchString } = req.params;
    let result = await db.promise().query(SEARCH_TAG, [searchString]);
    console.log(result[0]);
    res.status(200).json({ result: result[0] });
  } catch (error) {
    console.log(error);
    res.status(400);
  }
};

module.exports = {
  findBucketByContent,
  findBucketByTitle,
  findBucketByTag,
};
