import type { IRecipe } from "../../@types"
import Recipe from "../recipe/Recipe"
import styles from "./recipes.module.css"
interface RecipesProps {
  recipes: IRecipe[]
}

export default function Recipes({ recipes }: RecipesProps) {
  return (
    <ul className={styles.recipesContainer}>
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <Recipe recipeProp={recipe} />
        </li>
      ))}
    </ul>
  )
}
