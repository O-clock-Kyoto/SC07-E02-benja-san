import styles from "./App.module.css"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"
import { Route, Routes } from "react-router"
import Home from "./pages/home/Home.tsx"
import RecipePage from "./pages/recipePage/RecipePage.tsx"
import FavoritesPage from "./pages/favorites/FavoritesPage.tsx"
import FavoriteProvider from "./context/FavoriteContext.tsx"

function App() {
  return (
    <div className={styles.globalContainer}>
      <Sidebar />
      <section className={styles.mainContainer}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:recipeSlug" element={<RecipePage />} />
            <Route
              path="/favorites"
              element={
                <FavoriteProvider>
                  <FavoritesPage />
                </FavoriteProvider>
              }
            />
            <Route path="*" element={<h1>404 Not found</h1>} />
          </Routes>
        </main>
      </section>
    </div>
  )
}

export default App
