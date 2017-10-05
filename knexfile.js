const databaseName = 'passport_local_knex';

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'root',
      database : 'passport_local_knex'
    },
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  },
  test: {
    client: 'postgresql',
    connection: `postgres://localhost:5432/${databaseName}_test`,
    migrations: {
      directory: __dirname + '/src/server/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/server/db/seeds'
    }
  }
};
