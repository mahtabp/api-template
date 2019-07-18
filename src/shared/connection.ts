import config from '../shared/config'

const db = require('knex')({
  client: 'mysql',
  connection: 
  {
    host: config.get('DATABASE_HOST'),
    port: config.get('DATABASE_PORT'),
    user: config.get('DATABASE_USER'),
    database: config.get('DATABASE_NAME'),
  },
  migrations: {
    tableName: 'migrations'
  }
})

export default db