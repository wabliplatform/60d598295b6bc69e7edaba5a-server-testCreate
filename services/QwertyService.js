/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Qwerty } = require('../models/Qwerty');

/**
* Creates the data
*
* qwerty Qwerty data to be created
* returns qwerty
* */
const createqwerty = ({ qwerty }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Qwerty(qwerty).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* qwertyId String the Id parameter
* no response value expected for this operation
* */
const deleteqwerty = ({ qwertyId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Qwerty.findOneAndDelete({ _id:qwertyId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllqwerty = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Qwerty.find().exec();
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* qwertyId String the Id parameter
* returns qwerty
* */
const getqwerty = ({ qwertyId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Qwerty.findById(qwertyId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* qwertyId String the Id parameter
* qwerty Qwerty data to be updated (optional)
* returns qwerty
* */
const updateqwerty = ({ qwertyId, qwerty }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Qwerty.findOneAndUpdate({ _id:qwertyId },qwerty).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createqwerty,
  deleteqwerty,
  getAllqwerty,
  getqwerty,
  updateqwerty,
};
