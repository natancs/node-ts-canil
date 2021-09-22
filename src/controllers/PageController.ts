import { Request, Response } from 'express'

class PageController {
  public home(request: Request, response: Response) {
    response.send('home no controller')
  }

  public dogs(request: Request, response: Response) {
    
  }

  public cats(request: Request, response: Response) {
    
  }

  public fishes(request: Request, response: Response) {
    
  }

}

export { PageController }