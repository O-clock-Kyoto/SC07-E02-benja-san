import { useParams } from "react-router"
import type { IRecipe } from "../../@types"

interface RecipePageProps {
  findOneRecipeBySlug: (slug: string) => IRecipe | undefined
}

export default function RecipePage({ findOneRecipeBySlug }: RecipePageProps) {
  const { recipeSlug } = useParams()
  const recipe = findOneRecipeBySlug(String(recipeSlug))

  return (
    <section>
      {recipe ? <h1>{recipeSlug}</h1> : <p>Aucune recette ici :/</p>}
    </section>
  )
}
