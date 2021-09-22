import { Router } from "express"
import { PageController } from "../controllers/PageController"
import { SearchController } from "../controllers/SearchController"

const router = Router()
const pageController = new PageController()
const searchController = new SearchController()

router.get('/', pageController.home)
router.get('/dogs', pageController.dogs)
router.get('/cats', pageController.cats)
router.get('/fishes', pageController.fishes)

router.get('/search', searchController.search)

export { router }