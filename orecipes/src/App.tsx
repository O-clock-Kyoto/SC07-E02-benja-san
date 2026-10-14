import styles from "./App.module.css"
import Header from "./components/header/Header"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className={styles.globalContainer}>
      <Sidebar />
      <section className={styles.mainContainer}>
        <Header />
        <main className={styles.main}>
          <h1>Les recettes Orecipes</h1>
          <h2>Voici nos XXX recettes</h2>
        </main>
      </section>
    </div>
  )
}

export default App
