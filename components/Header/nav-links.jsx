import styled from "@emotion/styled";
import LinkItem from "./LinkItem";
import NavCloser from "./NavCloser";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  @media (max-width: 767px) {
    position: fixed;
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
    background-color: #f0f0f0;
    padding-top: 8px;
  }
`;

function NavLinks() {
  return (
    <Ul>
      <NavCloser />
      <LinkItem text="About" />
      <LinkItem text="Experience" />
      <LinkItem text="Passion" />
      <LinkItem text="Works" />
      <LinkItem text="Contact" />
      {/* <Li>
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
      </Li> */}
    </Ul>
  );
}

export default NavLinks;
