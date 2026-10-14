import { Link } from "react-router"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.homeLink} to="/">
        <img src="/logo.png" alt="Accès Accueil Orecipes" />
      </Link>
      <form action="">
        <input type="email" placeholder="Adresse Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">OK</button>
      </form>
    </header>
  )
}
