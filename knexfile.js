
module.exports = {
    development: {
      client: "sqlite3",
      connection: {
        filename: "./data/car-dealer.db3"
      },
      useNullasDefault: true
    },
    migrations: {
      directory: "./migrations"
    }
  };