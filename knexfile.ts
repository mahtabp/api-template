import config from './src/shared/config'

module.exports = {

  development: {
    client: "mysql",
    connection: {
      host: config.get('DATABASE_HOST'),
      port: config.get('DATABASE_PORT'),
      user: config.get('DATABASE_USER'),
      database: config.get('DATABASE_NAME'),
    }
  },

};
