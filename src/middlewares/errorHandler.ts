import * as _ from 'lodash'

const errorHandler = (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    return res.status(403).json(_.pick(err, ['message', 'name']))
  }

  if (err.name === 'UnauthorisedSystemAccess') {
    return res.status(401).json(_.pick(err, ['message', 'name']))
  }

  if (err.name === 'NotFound') {
    return res.status(404).json(_.pick(err, ['message', 'name']))
  }

  return res.status(500).json(_.pick(err, ['message', 'name']))
}

export default errorHandler