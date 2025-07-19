import { BrowserRouter, Routes, Route } from "react-router-dom"
import Loginpage from "./component/Loginpage"
import Successfull from "./pages/Successfull"
import Failed from "./pages/Failed"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage />}></Route>
        <Route path="/success" element={<Successfull />}></Route>
        <Route path="/failed" element={<Failed/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
