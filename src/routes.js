import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Users from "./pages/users";

function MyRoutes() {
  return (
    <Router>
      {/* path: endereço que vou navegar
      element: quando acessar essa rota, qual componente ele vai chamar?
      exact: para procurar todos os caracteres da rota.(não é mais usado)
      Routes: serve para encontrar a primeira rota, não vai verificar as outras rotas.
       */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/usuarios" element={<Users/>} />
      </Routes>
    </Router>
  );
}

export default MyRoutes;
