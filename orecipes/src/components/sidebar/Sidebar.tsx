import { NavLink } from "react-router"
import styles from "./sidebar.module.css"
import { useRecipes } from "../../context/RecipeContext"

export default function Sidebar() {
  const { recipes } = useRecipes()

  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <NavLink to={`/recipes/${recipe.slug}`}>{recipe.title}</NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
