// Styles
import { useSelector } from "react-redux";
import { selectProductsTotalPrice } from "../../redux/cart/cart-selectos";
import rootReducer from "../../redux/root-reducer";
import CartItem from "../cart-item";
import * as Styles from "./styles";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector(rootReducer => rootReducer.cartReducer)

  const selectProductsTP = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map(product => (
          <CartItem product={product} />
        ))}

        <Styles.CartTotal>Total: R$ {selectProductsTP}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
