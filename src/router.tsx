import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";
import Settings from "pages/Settings/index";
import ManageProducts from "components/ManageProducts";
import ManageUsers from "components/ManageUsers";
import ManageTables from "components/ManageTables";
import { Auth } from "helpers/Auth";


// trava de segurança que so deixa acessar uma rota se ele estive eutenticado
const AuthenticatedRoutes = () => {
  // O metodo isAuth que vai verificar se ta autenticado
  const isAuthenticated = Auth.isAuth();
  // se tiver autenticado vai para as rotas que permite a autenticação se não ele vai para login

  // if ternário / o Outlet é substituido por umas das rotas que estou tentando acessar e redireciona para login
  return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};

//Ele será responsável por renderizar as rotas da nossa aplicação, de acordo com os alias que configuramos em RoutePATH:
const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />

      <Route path="/" element={<AuthenticatedRoutes/>} >
     
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.SETTINGS} element={<Settings />} >
            <Route path={RoutePath.SETTINGS_TABLES} element={<ManageTables />} />
            <Route path={RoutePath.SETTINGS_PRODUCTS} element={<ManageProducts />} />
            <Route path={RoutePath.SETTINGS_USERS} element={<ManageUsers />} />
          </Route>
        </Route>
    </Routes>
  );
};

export default Router;
