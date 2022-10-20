import { Routes, Route } from 'react-router-dom';
import { RoutePath } from 'types/routes';
import Home from "pages/Home/index";


//Ele será responsável por renderizar as rotas da nossa aplicação, de acordo com os alias que configuramos em RoutePATH:
const Router = () => {
    return (
        <Routes>
            <Route path={RoutePath.HOME} element={<Home />} />
        </Routes>
    );
}

export default Router;

