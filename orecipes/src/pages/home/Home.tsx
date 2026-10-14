import type { IRecipe } from "../../@types"
import Recipes from "../../components/recipes/Recipes"

interface RecipesProps {
  isLoading: boolean
  errorMessage: string
  recipes: IRecipe[]
}

export default function Home({
  isLoading,
  errorMessage,
  recipes,
}: RecipesProps) {
  return (
    <>
      <h1>Les recettes Orecipes</h1>
      {isLoading ? (
        <p>Loading.....</p>
      ) : errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        <>
          {recipes.length === 0 ? (
            <h2>Pas de recettes pour le moment</h2>
          ) : (
            <>
              <h2>Voici nos {recipes.length} recettes</h2>
              <Recipes recipes={recipes} />
            </>
          )}
        </>
      )}
    </>
  )
}
