import { useAppDispatch, useAppSelector } from "../store/hook";
import { Container, Row, Col } from "react-bootstrap";
import Category from "../components/ecommerce/Category/Category";
import { useEffect } from "react";
import { actGetCategories } from "../store/categories/categoriesSlice";

const Categories = () => {

  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Category />
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;