const connection = require("../database/connection");
module.exports={
 async index(request,response){
   //const ong_id = request.headers.authorization;
   const aula = await connection('aula')
   .select('*');

   return response.json(aula);
 }

}