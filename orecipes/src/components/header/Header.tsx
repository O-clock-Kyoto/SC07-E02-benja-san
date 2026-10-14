import { Link } from "react-router"
import styles from "./header.module.css"
import { useEffect, useState } from "react"
import type { IToken } from "../../@types"

export default function Header() {
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

  // This useEffect, is just checking if theres credentials infos inside the local storage
  // If it does, then we set the token state
  // And we log the user
  useEffect(() => {
    async function getStorage() {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("pseudo") &&
        localStorage.getItem("logged")
      ) {
        setToken({
          logged: Boolean(localStorage.getItem("logged")),
          pseudo: String(localStorage.getItem("pseudo")),
          token: String(localStorage.getItem("token")),
        })
      }
    }
    getStorage()
  }, [])

  return (
    <header className={styles.header}>
      <Link className={styles.homeLink} to="/">
        <img src="/logo.png" alt="Accès Accueil Orecipes" />
      </Link>
      {message || token ? (
        <p>{message || token?.pseudo}</p>
      ) : (
        <form action={handleAction}>
          <input name="email" type="email" placeholder="Adresse Email" />
          <input name="password" type="password" placeholder="Mot de passe" />
          <button type="submit">OK</button>
        </form>
      )}
    </header>
  )
}
