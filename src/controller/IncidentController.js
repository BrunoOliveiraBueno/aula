const { create, index } = require("./OngController");

const connection = require('../database/connection');

module.exports ={

  async index(request,response){
    const{ page= 1 } = request.query;

    const [count] = await connection('aula').count();

    const aula= await connection('aula')
    .join('aluno')
    .limit(5)
    .offset((page - 1)*5)
    .select([
      'aula.*',
      'aluno.name',
      'aluno.email',
      'aluno.city',
      'aluno.uf'
    ]);
    response.header('X-Total-Count',count['count(*)'])
    return response.json(aula);
  },
  
  async create(request,response){
    const{ title, description,img,VideoLink,MateriaAula} = request.body;
   // const ong_id = request.headers.authorization;

   const [id]= await connection('aula').insert({
      title,
      description,
      img,
      VideoLink,
      MateriaAula
      //ong_id
    });

    return response.json({id});


  },
  async delete(request,response){
    const {id}=request.params;
    //const ong_id = request.headers.authorization;

    const incident = await connection('aula')
    .where('id',id)
    .select('*');

   // if(incident.ong_id != ong_id){
     // return response.status(401).json({error:'ope '});
    //}
   

    return response.json(incident);
  },
  async index(request,response){
    //const ong_id = request.headers.authorization;
    const aula = await connection('aula')
    .select('*');
 
    return response.json(aula);
  }
};