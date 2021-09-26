import { Request, Response } from 'express'
import { PetModel } from '../models/Pet'
import { createMenuObject } from '../helpers/createMenuObject'

const pet = new PetModel()

class SearchController {
  public search(request: Request, response: Response) {
    const query: string = request.query.q as string

    if (!query) {
      response.redirect('/')
      return
    }

    const list = pet.showName(query)

    const data = {
      menu: createMenuObject(''),
      list, 
      query
    }

    response.render('pages/page', data)
  }
}

export { SearchController }