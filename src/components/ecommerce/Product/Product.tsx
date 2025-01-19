import { Button } from "react-bootstrap";
import styles from "./Style.module.css";
const { product, productImg } = styles;

interface IProps {
  title: string;
  img: string;
  prefix: string;
  id: number;
  price: string;
}

const Product = ({ title, price, img }: IProps) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img
          src={img}
          alt={title}
        />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;