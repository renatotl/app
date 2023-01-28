import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";// importando uma imagem e apilidando-a de component
import { ReactComponent as Settings } from "assets/icons/settings.svg";// importando uma imagem e apilidando-a de component
import { RoutePath } from "types/routes";


//os objet dentro do array. Obrigatoriamente o component navigationItems do typo NavItem precisa ter duas propriedades: Icon e Path
export const navigationItems: NavItem[] = [
	{
		icon: <Home />,// esse Home é este cara { ReactComponent as Home } 
		path: RoutePath.HOME,// o seundo é o aminho que vai direionar 
	},
	{
		icon: <Settings />,
		path: RoutePath.SETTINGS,
	},
];

