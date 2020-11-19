
exports.up = function(knex) {
  return knex.schema.createTable('AulaQuestoes',function(table){
    table.increments();
    table.string('description').notNullable();
    table.string('resposta').notNullable();
   
    table.string('idaula').notNullable();

    table.foreign('idaula').references('id').inTable('Aula');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('AulaQuestoes');
};
