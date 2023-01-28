// RoutePath possui nossas rotas 
import { RoutePath } from "types/routes";


// define como um item de navegaçao deve ser
export interface NavItem {
	icon: JSX.Element;//icon no formato do elemento jsx
	path: RoutePath;// caminho por onde o icon vai indicar
}
