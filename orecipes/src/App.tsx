import { useEffect, useState } from "react"
import styles from "./App.module.css"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import type { IRecipe } from "./@types/index.d.ts"
import Recipes from "./components/recipes/Recipes.tsx"

function App() {
  //Prepare state to host recipes
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

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

  return (
    <div className={styles.globalContainer}>
      <Sidebar />
      <section className={styles.mainContainer}>
        <Header />
        <main className={styles.main}>
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
        </main>
      </section>
    </div>
  )
}

export default App
