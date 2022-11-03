import Menu from "components/Menu";
import { DateTime } from "luxon";
import { ReactComponent as Search } from "assets/icons/search.svg";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import ProductItemList from "components/ProductItemList";
import ProductItem from "components/ProductItem";
import OrderDetails from "components/OrderDetails";
import Overlay from "components/Overlay";
import CheckoutSection from "components/CheckoutSection";
import { useNavigate } from "react-router-dom";
import { products } from "mocks/products";
import { orders } from "mocks/orders";
import { ProductResponse } from "types/Product";

// o S da teg Home se refere  styled.section do Style
const Home = () => {
  // pegando a hpra de agora.
  // weekday tambem mostra o dia da semana
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const navigate = useNavigate();
  // ela recebe uma rota e nos direcionara para essa rota 
  const handleNavigation = (path: RoutePath) => navigate(path);

  const handleSelection = (product: ProductResponse) => {};

  return (
    <S.Home>
    <Menu 
    active={RoutePath.HOME} 
    navItems={navigationItems} 
    onNavigate={handleNavigation}
    onLogout={() => navigate(RoutePath.LOGIN)}
    />
    <S.HomeContent>
      <header>
        <S.HomeHeaderDetails>
          <div>
            <S.HomeHeaderDetailsLogo>Pizza Fresh</S.HomeHeaderDetailsLogo>
            <S.HomeHeaderDetailsDate>
              {dateDescription}
            </S.HomeHeaderDetailsDate>
          </div>
          <S.HomeHeaderDetailsSearch>
            <Search />
            <input type="text" placeholder="Procure pelo sabor" />
          </S.HomeHeaderDetailsSearch>
        </S.HomeHeaderDetails>
      </header>
      <div>
        <S.HomeProductTitle>
          <b>Pizzas</b>
        </S.HomeProductTitle>
        <S.HomeProductList>
        <ProductItemList>
              {Boolean(products.length) &&
                products.map((product, index) => (
                  <ProductItem
                    product={product}
                    key={`ProductItem-${index}`}
                    onSelect={handleSelection}
                  />
                ))}
            </ProductItemList>
        </S.HomeProductList>
      </div>
    </S.HomeContent>
    <aside>
    <OrderDetails orders={orders} />
    </aside>
    <Overlay>
      <CheckoutSection />
    </Overlay>
  </S.Home>
);
};;

export default Home;

/*  import * as S from "./style";
o s é um apelido do alias do arquivo style
*/

/* <aside>
		<p>Detalhes dos pedidos aqui</p>
	</aside> 
   essa teg geralmente representa uma barra vertical ao lado */




   /*
No momento o nosso componente ProductItemList está apresentando um erro que o compilador nos apresenta com a seguinte mensagem:

type {children: element} has no properties
   
   Este é um erro comum durante a construção de um componente, pois o compilador sabe que o componente "está aguardando props que ainda não foram definidas", então vamos fazer isso através da abertura de uma interface, onde iremos declarar a children necessária.
No arquivo index.tsx do componente ProductItemList, vamos inserir a interface com o seguinte código após os imports:

*/