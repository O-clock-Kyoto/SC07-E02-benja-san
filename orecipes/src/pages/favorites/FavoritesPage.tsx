import { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import type { IRecipe } from "../../@types"

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<IRecipe[]>([])

  const { token } = useAuth()

  useEffect(() => {
    async function fetchFavorites() {
      const response = await fetch("http://localhost:3000/api/favorites", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token?.token}`,
        },
      })
      const favoritesJson = await response.json()
      setFavorites(favoritesJson.favorites)
    }
    fetchFavorites()
  }, [token])

  console.log(favorites)
  return (
    <section>
      <h1>Vos Favoris !</h1>
    </section>
  )
}
