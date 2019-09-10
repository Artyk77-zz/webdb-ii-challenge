
exports.up = function(knex) {
    return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl
        .integer("VIN")
        .notNullable()
        .unique();
      tbl.string("make").notNullable();
      tbl.string("model").notNullable();
  
      tbl.decimal("mileage").notNullable();
  
      tbl.string("transmission");
      tbl.string("titleStatus");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
  };