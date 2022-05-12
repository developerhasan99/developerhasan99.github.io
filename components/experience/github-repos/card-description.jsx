import styled from "@emotion/styled";

const Description = styled.p`
  margin-bottom: 18px;
  font-size: 14px;
`;

function CardDescription({ description }) {
  return (
    <Description>
      {description
        ? description
        : "A GitHub repository created by Mehedi Hasan."}
    </Description>
  );
}

export default CardDescription;
