import styled from "@emotion/styled";
import Container from "../common/container";
import Logo from "./logo";
import NavLinks from "./nav-links";

const Nav = styled.nav`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s;
  z-index: 999;
  ${({ isSticky }) =>
    isSticky &&
    `background-color: #040810;
  padding: 10px 0;`}
`;

const Header = ({ isSticky }) => {
  return (
    <Nav isSticky={isSticky}>
      <Container
        maxWidth="1200px"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <NavLinks />
      </Container>
    </Nav>
  );
};

export default Header;
