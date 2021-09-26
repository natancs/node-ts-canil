import data from '../data/data.json'
import { PetType, Pet }  from '../@types/pet'

const pets: Pet[] = data

class PetModel {
  // filtra todos os pets
  public index(): Pet[] {
    return pets
  }

  // filtra pelo tipo
  public showType(type: PetType): Pet[] {
    return pets.filter(item => item.type === type)
  }

  // filtra pelo nome, no caso digitando as letras se encontrar já retorna true
  public showName(name: string): Pet[] {
    return pets.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
  }
}

export { PetModel }