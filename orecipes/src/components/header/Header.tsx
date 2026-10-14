import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.homeLink} href="/">
        <img src="/logo.png" alt="Accès Accueil Orecipes" />
      </a>
      <form action="">
        <input type="email" placeholder="Adresse Email" />
        <input type="password" placeholder="Mot de passe" />
        <button type="submit">OK</button>
      </form>
    </header>
  )
}
