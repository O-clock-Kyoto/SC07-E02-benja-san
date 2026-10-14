import { NavLink } from "react-router"
import type { IRecipe } from "../../@types"
import styles from "./sidebar.module.css"

//Typer recipes props
interface SidebarProps {
  recipes: IRecipe[]
}

export default function Sidebar({ recipes }: SidebarProps) {
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
        </ul>
      </nav>
    </aside>
  )
}
