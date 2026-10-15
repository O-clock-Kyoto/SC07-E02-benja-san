import Recipes from "../../components/recipes/Recipes"
import { useFavorites } from "../../context/FavoriteContext"

export default function FavoritesPage() {
  const { favorites } = useFavorites()
  return (
    <section>
      <h1>Vos Favoris !</h1>
      {favorites.length === 0 ? (
        <p>PAs encore de recettes favorites !</p>
      ) : (
        <Recipes recipes={favorites} />
      )}
    </section>
  )
}
