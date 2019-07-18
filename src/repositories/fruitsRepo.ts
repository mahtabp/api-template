import db from '../shared/connection'
import Fruit from '../types/fruit'
import Tables from '../types/tables'

const getFruits = async (): Promise<Fruit[]> => {
  try {
    return await db(Tables.Fruits)
    .select()

  } catch (e) {
    console.log(e)
  }
}

const getFruit = async (id: number): Promise<Fruit> => {
  try {
    return await db(Tables.Fruits)
    .select()
    .where('id', id)
    .first()

  } catch (e) {
    console.log(e)
  }
}

const insertFruit = async (name: string, color: string) => {
  try {
    console.log(name, color)
    await db(Tables.Fruits)
    .insert({
      name,
      color
    })

  } catch (e) {
    console.log(e)
  }
}

export {
  getFruits,
  getFruit,
  insertFruit
}