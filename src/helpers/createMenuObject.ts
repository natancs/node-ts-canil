import { MenuOptions } from "../@types/menu_options"


function createMenuObject(activeMenu: MenuOptions) {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }

  if (activeMenu !== '') {
    returnObject[activeMenu] = true
  }

  return returnObject
}

export { createMenuObject }