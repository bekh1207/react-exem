import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import ProtecttedRoute from "./ProtecttedRoute"
import { createContext, useState } from "react"

export const Context = createContext()

function App() {

const [cost, setCost] = useState(0)
const [history,setHistory] = useState([])


  return (
    <Context.Provider value={{cost, setCost, history, setHistory}}>
      <Routes>
        <Route element={<ProtecttedRoute />}>
          <Route path={'/'} element={<Home />} />
        </Route>
        <Route path={'login'} element={<Login />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
