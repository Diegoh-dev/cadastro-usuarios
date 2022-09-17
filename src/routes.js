import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import Users from "./pages/users";

function Routes() {
  return (
    <Router>
      {/* path: endereço que vou navegar
      component: quando acessar essa rota, qual componente ele vai chamar?
      exact: para procurar todos os caracteres da rota.
      Switch: serve para encontrar a primeira rota, não vai verificar as outras rotas.
       */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/usuarios" component={Users} />
      </Switch>
    </Router>
  );
}

export default Routes;
