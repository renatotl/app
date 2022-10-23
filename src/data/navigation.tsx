import { NavItem } from "components/Menu/types";
import { ReactComponent as Home } from "assets/icons/home.svg";
import { ReactComponent as Settings } from "assets/icons/settings.svg";
import { RoutePath } from "types/routes";


//os objet dentro do array 
export const navigationItems: NavItem[] = [
	{
		icon: <Home />,
		path: RoutePath.HOME,// o seundo é o aminho que vai direionar 
	},
	{
		icon: <Settings />,
		path: RoutePath.SETTINGS,
	},
];

