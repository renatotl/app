import Menu from "components/Menu";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import * as S from "./style";
import { Outlet, useNavigate } from "react-router-dom";// o componente Outlet vem da lib react-router-dom
import NavColumn from "components/NavColumn";


//Este componente será a página de configurações do nosso sistema e terá subseções para cada categoria
     

//Desta forma finalizamos a criação e estilização da estrutura da página Settings.
const Settings = () => {
  

const navigate = useNavigate();
  // ela recebe uma rota e nos direcionara para essa rota 
  const handleNavigation = (path: RoutePath) => navigate(path);
  

  
  return (
    <S.Settings>
      <Menu 
      active={RoutePath.SETTINGS} 
      navItems={navigationItems} 
      onNavigate={handleNavigation}
      onLogout={() => navigate(RoutePath.LOGIN)}
    />
      <S.SettingsPage>
        <header>
          <S.SettingsPageHeaderTitle>Configurações</S.SettingsPageHeaderTitle>
        </header>
        <S.SettingsContent>
          <S.SettingsContentSidebar>
            {/* Trecho precisa ser alterado posteriormente */}
            <NavColumn activeRoute={RoutePath.SETTINGS_TABLES} />
          </S.SettingsContentSidebar>
          <S.SettingsContentBox>
            <S.SettingsContentBoxEmpty>
              Selecione uma categoria
            </S.SettingsContentBoxEmpty>
            <Outlet />
          </S.SettingsContentBox>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

export default Settings;