import styles from "./sidebar.module.css"

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <nav>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
