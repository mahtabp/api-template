import { Request, Response, NextFunction } from 'express'
import { fruitsRepo } from '../repositories'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const result = await fruitsRepo.getFruits()
  res.status(200).send(result)
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const fruit = await fruitsRepo.getFruit(id)
    res.status(200).send(fruit)
  } catch(err) {
    next(err)
  }
}

const insertFruit = async (req: Request, res: Response, next: NextFunction) => {
  const { name, color } = req.body
  await fruitsRepo.insertFruit(name, color)
  res.status(200).send('get model')
}

export {
  getAll,
  getById,
  insertFruit
}