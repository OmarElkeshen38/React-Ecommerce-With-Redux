import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/ecommerce/Product/Product";
import { actGetProductsByCatPrefix, productsCleanUp } from "../store/products/productsSlice";
import Loading from "../components/feedback/Loading/Loading";

const Products = () => {

  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  const productsList =
    records.length > 0
      ? records.map((record) => (
        <Col
          xs={3}
          key={record.id}
          className="d-flex justify-content-center mb-5 mt-2"
        >
          <Product {...record} />
        </Col>
      ))
      : "there are no products";



  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;