import logo from "assets/imgs/logo.png";
import { ReactComponent as Logout } from "assets/icons/logout.svg"; //Importando ReactComponent COMO Logout
//  * = all  
import * as S from "./style";

import { RoutePath } from "types/routes";
import { NavItem } from "./types";



interface MenuProps {
  active: RoutePath; //define qual é a rota ativa no momento
  navItems: NavItem[];
  onNavigate: (data: RoutePath) => void;// recebe um rota como params e nos manta para algum lugar. Exemplo: se eu clicar em setting me manda para setting
  onLogout: () => void
}

// todo parâmetro precisa ser declarado em MenuProps
const Menu = ({active, navItems, onNavigate, onLogout}:MenuProps) => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logo} alt="Logo" />
        </S.MenuLogo>

        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton 
            active={item.path === active}
            onClick={() => onNavigate(item.path)}
            >
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
      </nav>
      <S.MenuItemLogout onClick={onLogout}>
        <Logout />
      </S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;

/*
{navItems.map((item, index) => (
  <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>

o valor item é pra correr cada item do menu. pegando o  item na propriedade path e compara com active 

Perceba que a função map faz um mapeamento de todos os itens dentro de navItems, renderizando a div estilizada S.MenuItem e seu respectivo button estilizado MenuItemButton.
Vamos passar duas propriedades dentro do MenuItem que serão: a chave (key) recebendo o index e o active recebendo a validação da rota do item com a rota informada pelo componente.
Além disso, item.icon serve para renderizar o ícone que configuramos dentro da interface NavItem.
O arquivo index.tsx do Menu deve ficar assim:

*/


