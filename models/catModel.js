'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const getCat = async (id) => {
  try {
    const [rows] = await promisePool.execute('SELECT * FROM wop_cat WHERE cat_id = ?',
        [id]);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

const addCat = async (params) => {
  try {
    const [rows] = await promisePool.execute('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES(?,?,?,?,?)',
        params);
    return rows;
  } catch (e) {
    console.log('error', e.message);
  }
};

module.exports = {
  getAllCats,
  getCat,
  addCat,
};
