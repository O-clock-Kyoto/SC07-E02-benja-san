import { useEffect, useState } from "react"
import styles from "./App.module.css"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import type { IRecipe } from "./@types/index.d.ts"
import { Route, Routes } from "react-router"
import Home from "./pages/home/Home.tsx"
import RecipePage from "./pages/recipePage/RecipePage.tsx"

function App() {
  //Prepare state to host recipes
  const [recipes, setRecipes] = useState<IRecipe[]>([])
  const [errorMessage, setErrorMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  //create function to find one recipe
  function findOneRecipeBySlug(slug: string): IRecipe | undefined {
    return recipes.find((recipe) => recipe.slug === slug)
  }

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
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  isLoading={isLoading}
                  errorMessage={errorMessage}
                  recipes={recipes}
                />
              }
            />
            <Route
              path="/recipes/:recipeSlug"
              element={<RecipePage findOneRecipeBySlug={findOneRecipeBySlug} />}
            />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </main>
      </section>
    </div>
  )
}

export default App
