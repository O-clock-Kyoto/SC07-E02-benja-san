import { createContext, useContext, useEffect, useState } from "react"
import type { IRecipe } from "../@types"
import { useAuth } from "./AuthContext"

interface FavoriteProviderProps {
  children: React.ReactNode
}

interface IFavoriteContext {
  favorites: IRecipe[]
}

export const FavoriteContext = createContext<IFavoriteContext | undefined>(
  undefined,
)

export default function FavoriteProvider({ children }: FavoriteProviderProps) {
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

  const values = { favorites }

  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoriteContext)
  if (!context) {
    throw new Error("Provider requis !")
  }
  return context
}
