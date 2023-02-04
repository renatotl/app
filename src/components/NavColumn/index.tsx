import { ReactComponent as Market } from "assets/icons/market.svg";
import { ReactComponent as Info } from "assets/icons/info.svg";
import { ReactComponent as Users } from "assets/icons/users.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
//Este componente será responsável por agrupar os itens de navegação das subseções da página Settings
import NavColumnItem from "components/NavColumnItem";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";


type NavColumnType = HTMLAttributes<HTMLDivElement>;


// identificando rotaativa
type NavColumnProps = {
  activeRoute: RoutePath;
} & NavColumnType;

const NavColumn = ({ activeRoute }: NavColumnProps) => {
  const navigate = useNavigate();

  // array de objetos
  const items = [
    {
      icon: <Market />,
      title: "Customize suas mesas",
      subtitle: "Adicione mesas, configure nomes",
      navigation: RoutePath.SETTINGS_TABLES,
    },
    {
      icon: <Info />,
      title: "Gerenciar Produtos",
      subtitle: "Edite os pratos, preços e etc.",
      navigation: RoutePath.SETTINGS_PRODUCTS,
    },
    {
      icon: <Users />,
      title: "Gerenciar Usuários",
      subtitle: "Gerencie o acesso ao sistema",
      navigation: RoutePath.SETTINGS_USERS,
    },
  ];
  return (
    <S.NavColumn>
      {items.map((item, key) => (
        <NavColumnItem
          onClick={() => navigate(item.navigation)}
          active={item.navigation === activeRoute}
          icon={item.icon}
          title={item.title}
          key={key}
          subtitle={item.subtitle}
        />
      ))}
    </S.NavColumn>
  );
};

export default NavColumn;

/*
      {items.map((item, key) => (
        <NavColumnItem
          onClick={() => navigate(item.navigation)}   // a rota vem do arquivo settings da pasta settings
          active={item.navigation === activeRoute}    //  verificando se o item.navigation é igual a rota ativa na quele momento
          icon={item.icon}
          title={item.title}
          key={key}
          subtitle={item.subtitle}
        />
      ))}
      
      
      
      PAR cada item,icon será renderizado um icon
      
      */
