const { create, index } = require("./OngController");

const connection = require('../database/connection');

module.exports ={

  async index(request,response){
    const{ page= 1 } = request.query;

    const [count] = await connection('AulaQuestoes').count();

    const AulaQuestoes= await connection('AulaQuestoes')
    .join('aluno')
    .limit(5)
    .offset((page - 1)*5)
    .select([
      'AulaQuestoes.*',
      'aluno.name',
      'aluno.email',
      'aluno.city',
      'aluno.uf'
    ]);
    response.header('X-Total-Count',count['count(*)'])
    return response.json(AulaQuestoes);
  },
  
  async create(request,response){
    const{  description,idaula,resposta} = request.body;
   // const ong_id = request.headers.authorization;

   const [id]= await connection('AulaQuestoes').insert({
      description,
      idaula,
      resposta
    });

    return response.json({id});


  },
  async patch(request,response){
    const {id}=request.params;
    //const ong_id = request.headers.authorization;

    const incident = await connection('AulaQuestoes')
    .where('idaula',id)
    .select('*');

   // if(incident.ong_id != ong_id){
     // return response.status(401).json({error:'ope '});
    //}
   

    return response.json(incident);
  },
  async index(request,response){
    //const ong_id = request.headers.authorization;
    const AulaQuestoes = await connection('AulaQuestoes')
    .select('*');
 
    return response.json(AulaQuestoes);
  }
};