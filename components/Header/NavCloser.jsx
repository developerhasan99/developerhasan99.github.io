import styled from "@emotion/styled";

const Li = styled.li`
  text-align: right;
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Button = styled.button`
  border: 0;
  margin: 5px;
  background-color: transparent;
`;

function NavCloser({ handleMobileNav }) {
  return (
    <Li>
      <Button onClick={handleMobileNav}>
        <img src="./x.svg" alt="X" />
      </Button>
    </Li>
  );
}

export default NavCloser;
