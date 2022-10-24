import { Routes, Route } from "react-router-dom";
import { RoutePath } from "types/routes";
import Home from "pages/Home/index";
import Login from "pages/Login";

//Ele será responsável por renderizar as rotas da nossa aplicação, de acordo com os alias que configuramos em RoutePATH:
const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />

      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

export default Router;
