import { useAppDispatch, useAppSelector } from "../store/hook";
import { Container } from "react-bootstrap";
import Category from "../components/ecommerce/Category/Category";
import { useEffect } from "react";
import { actGetCategories } from "../store/categories/categoriesSlice";
import Loading from "../components/feedback/Loading/Loading";
import GridList from "../components/common/GridList/GridList";

const Categories = () => {

  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.categories);

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record) => <Category {...record} />} />
        
      </Loading>
    </Container>
  );
};

export default Categories;