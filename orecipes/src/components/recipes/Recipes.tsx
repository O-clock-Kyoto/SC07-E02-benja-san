import type { IRecipe } from "../../@types"

interface RecipesProps {
  recipes: IRecipe[]
}

export default function Recipes({ recipes }: RecipesProps) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
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
        </li>
      ))}
    </ul>
  )
}
