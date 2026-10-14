import type { IRecipe } from "../../@types"

interface RecipeProps {
  recipe: IRecipe
}

export default function Recipe({ recipe }: RecipeProps) {
  return (
    <article>
      <div>
        <img src={recipe.thumbnail} alt={recipe.title} />
      </div>
      <div>
        <h3>{recipe.title}</h3>
        <p>difficulty : {recipe.difficulty}</p>
        <a href={`/recipes/${recipe.slug}`}>Voir la recette</a>
      </div>
    </article>
  )
}
