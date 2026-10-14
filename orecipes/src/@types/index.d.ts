export interface IRecipe {
  id: number
  title: string
  slug: string
  thumbnail: string
  author: string
  difficulty: string
  description: string
  ingredients: IIngredient[]
  instructions: string[]
}

interface IIngredient {
  id: number
  quantity: number | string
  unit: string
  name: string
}

export interface IToken {
  logged: boolean
  pseudo: string
  token: string
}
