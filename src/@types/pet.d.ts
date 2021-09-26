export type PetType = 'dog' | 'cat' | 'fish'

type PetSex = 'Masculino' | 'Feminino'

export type Pet = {
  type: PetType
  image: string
  name: string
  color: string
  sex: PetSex
}