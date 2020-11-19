const connection = require("../database/connection");
const { create } = require("./IncidentController");

module.exports={
  async create(request,response){
    const {email }=request.body;
    const {senha}=request.body;
    const aluno = await connection('aluno')
    .where('email', email)
    .select('name','senha')
    .first();

    if(!aluno){
      return response.status(400).json({error: 'No aluno found with'});
    }else if(aluno.senha != senha){
      return response.status(400).json({error: 'Senha Invalida'});
    }
    return response.json(aluno);
  }
}