import styled from "@emotion/styled";

const Button = styled.button`
  border: 0;
  background-color: transparent;
`;

function NavCloser() {
  return (
    <li>
      <Button>
        <img src="./x.svg" alt="X" />
      </Button>
    </li>
  );
}

export default NavCloser;
