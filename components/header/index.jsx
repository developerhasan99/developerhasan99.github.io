import styled from "@emotion/styled";
import Logo from "./logo";
import NavLinks from "./nav-links";

const Nav = styled.nav`
  padding: 35px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Container = styled.div`
  padding: 0 15px;
  margin: auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;

const Header = () => {
  return (
    <Nav>
      <Container>
        <Logo />
        <NavLinks />
      </Container>
    </Nav>
  );
};

export default Header;
