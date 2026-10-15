import React, { createContext, useContext, useEffect, useState } from "react"
import type { IRecipe } from "../@types"

interface RecipeContextProviderProps {
  children: React.ReactNode
}

interface IRecipeContext {
  recipes: IRecipe[]
  errorMessage: string
  isLoading: boolean
  findOneRecipeBySlug: (slug: string) => IRecipe | undefined
}

export const RecipeContext = createContext<IRecipeContext | undefined>(
  undefined,
)

export default function RecipeContextProvider({
  children,
}: RecipeContextProviderProps) {
  //Prepare state to host recipes
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  //create function to find one recipe
  function findOneRecipeBySlug(slug: string): IRecipe | undefined {
    return recipes.find((recipe) => recipe.slug === slug)
  }

  //Retrieve all recipes
  useEffect(() => {
    async function fetchRecipes() {
      setErrorMessage("")
      setIsLoading(true)
      try {
        const response = await fetch("http://localhost:3000/api/recipes")
        if (!response.ok) {
          throw new Error("Erreur dans le fetch des données !")
        }
        const recipesJson = await response.json()
        setRecipes(recipesJson)
      } catch {
        setErrorMessage(
          "Une erreur est survenue, veuillez réessayer plus tard.",
        )
      } finally {
        setIsLoading(false)
      }
    }
    fetchRecipes()
  }, [])

  const values = {
    recipes,
    errorMessage,
    isLoading,
    findOneRecipeBySlug,
  }

  return (
    <RecipeContext.Provider value={values}>{children}</RecipeContext.Provider>
  )
}

export function useRecipes() {
  const context = useContext(RecipeContext)
  if (!context) {
    throw new Error("provider required !")
  }
  return context
}
