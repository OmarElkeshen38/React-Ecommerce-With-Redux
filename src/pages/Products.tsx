import { act, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/ecommerce/Product/Product";
import { actGetProductsByCatPrefix } from "../store/products/productsSlice";

const Products = () => {
  
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
  }, [dispatch, params]);

  const ProductsList = records.length > 0 ? records.map((record) => (

    <Col  key={record.id} xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
      <Product {...record} />
    </Col>
  )) : "There are no products";


  return (
    <Container>
      <Row>
        {ProductsList}
      </Row>
    </Container>
  );
};

export default Products;