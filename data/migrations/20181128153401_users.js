
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl =>{
        tbl.increments();
        tbl.string('username', 50).notNullable().unique();
        tbl.string('password', 50).notNullable();
        tbl.string('department', 100)
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
  };
  