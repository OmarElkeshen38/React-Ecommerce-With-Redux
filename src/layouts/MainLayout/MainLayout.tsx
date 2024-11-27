import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../components/common/";
import styles from './Mainstyles.module.css';

const { container, wrapper } = styles;

const MainLayout = () => {
  return <Container className={container}>
    <Header />
    <div className={wrapper}>
      <Outlet />
    </div>
    <Footer />
  </Container>;
};

export default MainLayout;
