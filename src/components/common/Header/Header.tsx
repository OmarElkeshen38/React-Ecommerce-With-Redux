import { NavLink } from "react-router-dom";
import { HeaderBasket } from "../../ecommerce/HeaderBasket";
import styles from "./HeaderStyles.module.css";
import { Badge, Navbar, Nav, Container } from "react-bootstrap";

const { headerContainer, headerLogo} = styles;

const Header = () => {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>our</span> <Badge>Ecom</Badge>
        </h1>
        <HeaderBasket />
      </div>

      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="categories">Categories</Nav.Link>
              <Nav.Link as={NavLink} to="about-us">About</Nav.Link>
              <Nav.Link as={NavLink} to="products">Products</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={NavLink} to="login">Login</Nav.Link>
              <Nav.Link as={NavLink} to="register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
