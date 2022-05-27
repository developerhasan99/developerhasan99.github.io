import styled from "@emotion/styled";

const Button = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

function NavToggler() {
  return (
    <Button>
      <img src="./menu.svg" alt="Menu" />
    </Button>
  );
}

export default NavToggler;
