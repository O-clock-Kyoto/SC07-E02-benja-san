import styles from "./App.module.css"
import Header from "./components/header/Header"

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Les recettes Orecipes</h1>
        <h2>Voici nos XXX recettes</h2>
      </main>
    </>
  )
}

export default App
