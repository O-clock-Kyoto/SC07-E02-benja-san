import { createContext, useContext, useState } from "react"
import type { IToken } from "../@types"

//4 Steps pour créer un Contexte
// 1 - Créer le contexte via createContext de react
// 2 - Créer un Provider pour englober votre APP OU tout autre element
// 3 - Typer toutes les valeurs que vous passez dans le contexte via une interface ou un type
// 4 - Créez un hokk personalisé "use" afin de vous permettre d'utiliser les valeurs du contexte ou bon vous semble dans le provider

interface IAuthContext {
  token: IToken | undefined
  message: string
  handleAction: (formData: FormData) => void
  setToken: (token: IToken) => void
}

interface AuthProviderProps {
  children: React.ReactNode
}

//Je prépare mon contexte afin de proposer les attributs et methodes de mon objet
export const AuthContext = createContext<IAuthContext | undefined>(undefined)

//Je prépare un provider
//Afin d'hydrater ! Toutes les valeurs de mon contexte
//Et les proposer à TOUTE mon application
// (ou toutes les fonctions composantes qui en ont besoin)
export default function AuthProvider({ children }: AuthProviderProps) {
  const [message, setMessage] = useState("")
  const [token, setToken] = useState<IToken | undefined>(undefined)

  async function handleAction(formdata: FormData) {
    const email = formdata.get("email") as string
    const password = formdata.get("password") as string
    const body = {
      email: email,
      password: password,
    }

    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })

    const data = await response.json()

    if (!data?.pseudo) {
      setMessage("Erreur de connexion, veuillez réessayer")
    } else {
      setMessage(data.pseudo)
      setToken(data)
      localStorage.setItem("token", data.token)
      localStorage.setItem("pseudo", data.pseudo)
      localStorage.setItem("logged", data.logged)
    }
  }

  //J'englobe toutes les valeurs que je veux passer dans un objet (Le AuthContext)
  const value = {
    token,
    message,
    handleAction,
    setToken,
  }

  //Je retourne une fonction componante qui englobera mon app
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

//Je crée une fonction qui me permet d'accéder aux valeurs du contexte
//Partout sur mon app (partout ou le provider a été déclaré)
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("provider non implémenté ! ")
  }
  return context
}
