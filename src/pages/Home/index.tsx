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
import { ProductResponse } from "types/Product";
import { OrderType } from "types/orderType";
import { useState } from "react";
import { OrderItemType } from "types/OrderItemType";



// o S da teg Home se refere  styled.section do Style
const Home = () => {
  // pegando a hpra de agora.
  // weekday tambem mostra o dia da semana
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  const navigate = useNavigate();
// qual está ativo Comer_No_LOCAL ou outros
  const [activeOrderType, setActiverOrderType] = useState(
    OrderType.COMER_NO_LOCAL
  );




  // ela recebe uma rota e nos direcionara para essa rota 
  const handleNavigation = (path: RoutePath) => navigate(path);



// definindo como array vazio
  const [orders, setOrders] = useState<OrderItemType[]>([]);


//Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
const handleSelection = (product: ProductResponse) => {
  // fazendo uma bunca dentro de find/ para cada item encontrado sexecuta a função comprar o id do item selecionado com o id do produtos/ isso resulta em truer ou false
  const existing = orders.find((i) => i.product.id === product.id);
  //verifica se existe algum conteúdo dentro de existing/ ou seja se ela é true ou false/ se ela for verdadeira vamos pegar a quantidade dela e somar uma unidade ou somente um.
  const quantity = existing ? existing.quantity + 1 : 1;
  //recebe um objeto com duas probpriedades 
  const item: OrderItemType = { product, quantity };
//pegando existing/ se ela for true faz um map em orders/ para cada item em orders ele compara i.product.id com existing.product.id/ se for true ele renderiza o item caso não ele retiorna somente o i
  const list = existing
    ? orders.map((i) => (i.product.id === existing.product.id ? item : i))
    
    : [...orders, item];
  setOrders(list);
};

// função que de fato remove o item
const handleRemoveOrderItem = (id: string) => {
  // para cada item deste pedido será verificado o i.product.id se é diferente do id que ela recebeu na função/ se for diferente ela mantem na lista, mas se for igual ela remove da lista/ assim mudamos o state 
  const filtered = orders.filter((i) => i.product.id != id);
  setOrders(filtered);
};

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
    <OrderDetails 
    orders={orders} 
    onChangeActiveOrderType={(data) => setActiverOrderType(data)}
    activeOrderType={activeOrderType}
    onRemoveItem={handleRemoveOrderItem}
    />
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