import convict from 'convict'

const definitions = {
  HTTP_PORT: {
    env: "HTTP_PORT",
    format: "port",
    default: 8085
  },
  DATABASE_HOST: {
    env: "DATABASE_HOST",
    format: "*",
    default: '127.0.0.1'
  },
  DATABASE_PORT: {
    env: "DATABASE_PORT",
    format: "*",
    default: 3306
  },
  DATABASE_NAME: {
    env: "DATABASE_NAME",
    format: "*",
    default: "template_db"
  },
  DATABASE_USER: {
    env: "DATABASE_USER",
    format: "*",
    default: "root"
  },
  DATABASE_PASSWORD: {
    env: "DATABASE_PASSWORD",
    format: "*",
    default: ""
  }
}

const config = convict(definitions)

config.validate({ allowed: 'strict' })

export default config