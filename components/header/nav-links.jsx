import styled from "@emotion/styled";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`;

const Li = styled.li`
  margin: 0 5px;
`;

const A = styled.a`
  cursor: pointer;
  font-weight: 300;
  color: #fff;
  display: block;
  padding: 7px 10px;
  transition: 0.3s;
  border-radius: 3px;
  &:hover {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function NavLinks() {
  return (
    <Ul>
      <Li>
        <A>About</A>
      </Li>
      <Li>
        <A>Experience</A>
      </Li>
      <Li>
        <A>Passion</A>
      </Li>
      <Li>
        <A>Work</A>
      </Li>
      <Li>
        <A>Contact</A>
      </Li>
    </Ul>
  );
}

export default NavLinks;
