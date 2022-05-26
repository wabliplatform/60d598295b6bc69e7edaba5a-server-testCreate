/**
 * The QwertyController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/QwertyService');
const createqwerty = async (request, response) => {
  await Controller.handleRequest(request, response, service.createqwerty);
};

const deleteqwerty = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteqwerty);
};

const getAllqwerty = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllqwerty);
};

const getqwerty = async (request, response) => {
  await Controller.handleRequest(request, response, service.getqwerty);
};

const updateqwerty = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateqwerty);
};


module.exports = {
  createqwerty,
  deleteqwerty,
  getAllqwerty,
  getqwerty,
  updateqwerty,
};
