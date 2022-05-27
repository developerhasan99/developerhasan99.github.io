import styled from "@emotion/styled";

const Li = styled.li``;

const A = styled.a`
  margin: 0 5px;
  cursor: pointer;
  font-weight: 300;
  color: #fff;
  display: block;
  padding: 7px 10px;
  transition: 0.3s;
  border-radius: 3px;
  &:hover {
    color: #fff;
    background-color: rgba(170, 170, 170, 0.1);
  }
  @media (max-width: 767px) {
    color: #040810;
    &:hover {
      color: #040810;
      background-color: #5050501a;
    }
  }
`;

function LinkItem({ text }) {
  return (
    <Li>
      <A>{text}</A>
    </Li>
  );
}

export default LinkItem;
