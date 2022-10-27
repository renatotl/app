import { ReactComponent as Trash } from "assets/icons/trash.svg";
import * as S from "./style";

const OrderItem = () => {
	return (
		<S.OrderItem>
			<S.OrderItemLeft>
				<S.OrderItemLeftTop>
					<S.OrderItemProduct>
						<S.OrderItemProductImage src="" alt="Pizza de..." />
						<S.OrderItemProductDetails>
							<S.OrderItemProductDetailsName>
								Nome do Produto
							</S.OrderItemProductDetailsName>
							<S.OrderItemProductDetailsPrice>
								Preço do Produto
							</S.OrderItemProductDetailsPrice>
						</S.OrderItemProductDetails>
					</S.OrderItemProduct>
					<S.OrderItemQuantity type="number" value="0" />
				</S.OrderItemLeftTop>
				<S.OrderItemLeftObservation
					type="text"
					placeholder="Observações do pedido"
				/>
			</S.OrderItemLeft>
			<S.OrderItemRight>
				<S.OrderItemRightTotalPrice>R$ 150.00</S.OrderItemRightTotalPrice>
				<S.OrderItemRightTrash>
					<Trash />
				</S.OrderItemRightTrash>
			</S.OrderItemRight>
		</S.OrderItem>
	);
};

export default OrderItem;