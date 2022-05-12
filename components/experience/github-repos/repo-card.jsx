import styled from "@emotion/styled";
import CardDescription from "./card-description";
import CardCaption from "./card-caption";

const Card = styled.a`
  display: block;
  padding: 1rem 1rem 2rem 1rem;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  border-radius: 5px;
  height: 100%;
  position: relative;
`;

const CardHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  color: #0969da;
  font-size: 18px;
  word-break: break-all;
`;

function RepoCard({ html_url, name, description, language, updated_at }) {
  return (
    <Card href={html_url}>
      <CardHeading>{name}</CardHeading>
      <CardDescription description={description} />
      <CardCaption language={language} updated_at={updated_at} />
    </Card>
  );
}

export default RepoCard;
