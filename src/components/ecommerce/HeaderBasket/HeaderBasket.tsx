import Logo from "../../../assets/svg/cart.svg?react";
import styles from './HeaderBasket.module.css';

const { basketContainer, basketQuantity } = styles;

const HeaderBasket = () => {
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>0</div>
    </div>
  )
}

export default HeaderBasket
