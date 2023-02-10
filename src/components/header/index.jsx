import { useMemo } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart-selectos";
import { loggoutUser, loginUser } from "../../redux/user/action";
// import rootReducer from "../../redux/root-reducer";


// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

// Utilities

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();

  const productsCount = useSelector(selectProductsCount);

  // console.log(currentUser)
  // console.log(products)

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const HandleLoginClick = () => {
    dispatch(loginUser({ name: 'Fabricio', email: 'fabricio@gmail.com' }));
  }

  const HandleLoggoutClick = () => {
    dispatch(loggoutUser());
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={ HandleLoggoutClick }>Sair</div>
        ) : (
          <div onClick={ HandleLoginClick }>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />  
    </Styles.Container>
  );
}

export default Header;
