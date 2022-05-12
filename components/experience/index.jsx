import styled from "@emotion/styled";
import GithubRepos from "./github-repos";
import TechLogoList from "./tech-logos";

const Section = styled.section`
  padding-top: 100px;
  padding-bottom: 100px;
  background: #fff;
`;

const Container = styled.div`
  max-width: 992px;
  padding: 0 15px;
  margin: auto;
`;

const HeadingsWrapper = styled.div`
  text-align: center;
`;

const Heading = styled.h2`
  text-transform: uppercase;
  margin: 0 0 30px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
`;

const Description = styled.p`
  margin: 1.5rem 0;
  line-height: 1.5;
  word-spacing: 2px;
  font-weight: 300;
`;

const H4 = styled.h4`
  margin: 1.5rem 0;
  line-height: 1.5;
  word-spacing: 2px;
  font-weight: 300;
`;

function Experience() {
  return (
    <Section>
      <Container>
        <HeadingsWrapper>
          <Heading>Experience</Heading>
          <Description>
            I've been doing web development for about 4 years now, and I'm
            always eager to <br /> learn more in this fast paced industry.
          </Description>
        </HeadingsWrapper>
        <H4>Some technologies I have worked with:</H4>
        <TechLogoList />
        <H4>My recent GitHub repositories:</H4>
        <GithubRepos />
      </Container>
    </Section>
  );
}

export default Experience;
