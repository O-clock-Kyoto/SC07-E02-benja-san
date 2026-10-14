import { Link, useParams } from "react-router"
import type { IRecipe } from "../../@types"
import { useLayoutEffect } from "react"

interface RecipePageProps {
  findOneRecipeBySlug: (slug: string) => IRecipe | undefined
}

export default function RecipePage({ findOneRecipeBySlug }: RecipePageProps) {
  const { recipeSlug } = useParams()
  const recipe = findOneRecipeBySlug(String(recipeSlug))

  return (
    <section>
      {recipe ? (
        <>
          <section>
            <img src={recipe.thumbnail} alt={recipe.title} />
            <div>
              <h1>{recipe.title}</h1>
              <p>
                {recipe.author} - {recipe.difficulty}
              </p>
            </div>
          </section>
          <section>
            {recipe.ingredients.length > 0 && (
              <ul>
                {recipe.ingredients.map((ingredient) => (
                  <li>
                    <li key={ingredient.id}>
                      <span>
                        {ingredient.quantity} {ingredient.unit}
                      </span>{" "}
                      {ingredient.name}
                    </li>
                  </li>
                ))}
              </ul>
            )}
          </section>
          <section>
            {recipe.instructions.length > 0 && (
              <ul>
                {recipe.instructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
            )}
          </section>
        </>
      ) : (
        <p>Aucune recette ici :/</p>
      )}
    </section>
  )
}
