const { Company, User } = require('../models');
const { info, error } = require('../core/logger.js');

module.exports = class CompaniesController {
  
  // GET /companies
  static index = async (res) => {
    try {
      info("GREEN", 'GET request for all companies');
      let options = {
        include: User
      }
      let companies = await Company.findAll(options);
      return res.status(201).json({ companies })
    } catch(err) {
      error(`Companies#index error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  } 

  // GET /companies/id
  static show = async (id, res) => {
    try {
      info("GREEN", `GET request for company with id: ${id}`);
      let options = {
        where: {
          id: id
        },
        include: User
      }
      let company = await Company.findOne(options);
      return res.status(201).json({ company })
    } catch(err) {
      error(`Companies#show error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // POST /companies
  static create = async (body, res) => {
    try {
      info("GREEN", `POST request for new company: ${body.name}`);
      let company = await Company.create(body);
      return res.status(201).json({ company });
    } catch (err) {
      error(`Companies#create error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // PATCH /companies/id
  static update = async (id, body, res) => {
    try {
      info("GREEN", `PATCH request for company with id: ${id}`);
      let options = {
        where: {
          id: id
        },
        include: User
      }
      let company = await Company.findOne(options);
      await company.update(body, options);
      company = await Company.findOne(options);
      return res.status(201).json({ company });
    } catch(err) {
      error(`Companies#update error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE /companies/id
  static destroy = async (id, res) => {
    try {
      info("GREEN", `DELETE request for company with id: ${id}`);
      let options = {
        where: {
          id: id
        }
      }
      let company = await Company.findOne(options);
      await company.destroy(options);
      let companies = await Company.findAll({include: User});
      return res.status(201).json({ companies });
    } catch(err) {
      error(`Companies#destroy error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }
}