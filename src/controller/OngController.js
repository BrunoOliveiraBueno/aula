const connection = require('../database/connection');
const crypto = require('crypto');
module.exports = {
  async index(request,response) {
    const ongs = await connection('aluno').select('*');
     return response.json(ongs);
  },
  
  async create(request, response) {
    const {name, email, senha,city,uf} = request.body;
    const id = crypto.randomBytes(4).toString('HEX');
  
    await connection('aluno').insert({
      id,
      name,
      email, 
      senha,
      city,
      uf,
    })
    return response.json({name});
  }
};