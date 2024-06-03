import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Layout from "./components/Layout";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        { user.logado ? (
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>} />
            <Route path="/perfil/:id" element={<Perfil/>} />
          </Route> 
        ) : (
          <Route path="/login" element={<Login/>} />       
        )}
        <Route path="*" element={<h1>Isso não existe!</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App