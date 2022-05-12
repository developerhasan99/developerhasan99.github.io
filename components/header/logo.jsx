import styled from "@emotion/styled";

const A = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0 0 0 10px;
  font-weight: 300;
`;

function Logo() {
  return (
    <A>
      <img src="./logo.svg" alt="M" width={24} />
      <H2>Mehedi Hasan</H2>
    </A>
  );
}

export default Logo;
