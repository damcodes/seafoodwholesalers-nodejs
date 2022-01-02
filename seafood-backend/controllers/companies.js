const { Company, User } = require('../models');
const { error } = require('../core/logger.js');

module.exports = class CompaniesController {
  
  // GET /companies
  static index = async (res) => {
    try {
      let options = {
        include: User
      };
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
      let company = await Company.create(body);
      return res.status(201).json({ company });
    } catch(err) {
      error(`Companies#create error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // PATCH /companies/id
  static update = async (id, body, res) => {
    try {
      let options = {
        where: {
          id: id
        },
        include: User
      }
      await Company.update(body, options);
      let company = await Company.findOne(options);
      return res.status(201).json({ company });
    } catch(err) {
      error(`Companies#update error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }

  // DELETE /companies/id
  static destroy = async (id, res) => {
    try {
      let options = {
        where: {
          id: id
        }
      }
      let company = await Company.findOne(options);
      await company.destroy(options);
      let companies = await Company.findAll({ include: User });
      return res.status(201).json({ companies });
    } catch(err) {
      error(`Companies#destroy error: ${err.message}`);
      return res.status(500).json({ error: err.message });
    }
  }
}