import { Link } from "react-router"
import styles from "./header.module.css"
import { useAuth } from "../../context/AuthContext"
import { useEffect } from "react"

export default function Header() {
  const { token, message, handleAction, setToken } = useAuth()

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
  }, [setToken])

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
