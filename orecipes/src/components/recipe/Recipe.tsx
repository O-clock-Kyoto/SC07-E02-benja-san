import type { IRecipe } from "../../@types"
import styles from "./recipe.module.css"

interface RecipeProps {
  recipeProp: IRecipe
}

export default function Recipe({ recipeProp }: RecipeProps) {
  return (
    <article className={styles.recipeCard}>
      <div className={styles.imgContainer}>
        <img src={recipeProp.thumbnail} alt={recipeProp.title} />
      </div>
      <div className={styles.content}>
        <h3>{recipeProp.title}</h3>
        <p>difficulty : {recipeProp.difficulty}</p>
        <a href={`/recipes/${recipeProp.slug}`}>Voir la recette</a>
      </div>
    </article>
  )
}
