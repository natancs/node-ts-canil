import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'
import { PetModel } from '../models/Pet'

const pet = new PetModel()

class PageController {
  public home(request: Request, response: Response) {
    let list = pet.index

    const data = {
      menu: createMenuObject('all'),
      banner: {
        title: 'Todos os animais',
        background: 'allanimals.jpg'
      },
      list
    }

    response.render('pages/page', data)
  }

  public dogs(request: Request, response: Response) {
    let list = pet.showType('dog')

    const data = {
      menu: createMenuObject('dog'),
      banner: {
        title: 'Cachorros',
        background: 'banner_dog.jpg'
      },
      list
    }

    response.render('pages/page', data)
  }

  public cats(request: Request, response: Response) {
    let list = pet.showType('cat')

    const data = {
      menu: createMenuObject('cat'),
      banner: {
        title: 'Gatos',
        background: 'banner_cat.jpg'
      },
      list
    }

    response.render('pages/page', data)
  }

  public fishes(request: Request, response: Response) {
    let list = pet.showType('fish')

    const data = {
      menu: createMenuObject('fish'),
      banner: {
        title: 'Peixes',
        background: 'banner_fish.jpg'
      },
      list
    }

    response.render('pages/page', data)
  }

}

export { PageController }