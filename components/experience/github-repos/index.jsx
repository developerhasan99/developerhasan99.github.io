import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import fetchGithubRepos from "../../../utils/fetch-github-repos";
import RepoCard from "./repo-card";

const CardsWrapper = styled.div`
  margin: 0 -10px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const CardWrapper = styled.li`
  margin-bottom: 20px;
  padding: 0 10px;
  position: relative;
  width: 33.333333%;
  flex: 0 0 33.333333%;
  @media (max-width: 767px) {
    width: 100%;
    flex: 0 0 100%;
  }
`;

function GithubRepos() {
  const [arrayList, setArrayList] = useState([]);

  useEffect(() => {
    (async () => {
      const githubRepos = await fetchGithubRepos();
      setArrayList(githubRepos);
    })();
  }, []);

  const listItems = arrayList.map((repo) => {
    return (
      <CardWrapper key={repo.id}>
        <RepoCard
          html_url={repo.html_url}
          name={repo.name}
          description={repo.description}
          language={repo.language}
          updated_at={repo.updated_at}
        />
      </CardWrapper>
    );
  });

  return <CardsWrapper>{listItems}</CardsWrapper>;
}

export default GithubRepos;
