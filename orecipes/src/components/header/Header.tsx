import { Link } from "react-router"
import styles from "./header.module.css"
import { useState } from "react"

export default function Header() {
  const [message, setMessage] = useState("")

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

    const token = await response.json()

    if (!token?.pseudo) {
      setMessage("Erreur de connexion, veuillez réessayer")
    } else {
      setMessage(token.pseudo)
    }

    console.log(token)
  }

  return (
    <header className={styles.header}>
      <Link className={styles.homeLink} to="/">
        <img src="/logo.png" alt="Accès Accueil Orecipes" />
      </Link>
      {message ? (
        <p>{message}</p>
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
