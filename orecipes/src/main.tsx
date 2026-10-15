import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter } from "react-router"
import AuthProvider from "./context/AuthContext.tsx"
import RecipeContextProvider from "./context/RecipeContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RecipeContextProvider>
          <App />
        </RecipeContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
