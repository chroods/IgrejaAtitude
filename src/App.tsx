import { Home } from "./screens/Home"
import { CssGlobal } from "./global/cssGlobal"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
    <Outlet />

    <CssGlobal />
    </>
  )
}

export default App
