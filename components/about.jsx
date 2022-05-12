import styled from "@emotion/styled";

const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 100px;
  background-color: #f0f0f0;
`;

const Container = styled.div`
  max-width: 650px;
  margin: auto;
  padding: 0 15px;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const AboutHeading = styled.h2`
  text-transform: uppercase;
  margin: 0 0 30px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
`;

const AboutDescription = styled.p`
  margin: 1.5rem 0;
  line-height: 1.5;
  word-spacing: 2px;
  font-weight: 300;
`;

const TLDR = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
`;

const TLDRHeading = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  word-spacing: 7px;
  line-height: 1.5;
`;

const TList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const TlItem = styled.li`
  padding: 15px;
`;

const TlItemHeading = styled.h3`
  font-weight: 300;
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`;

function About() {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <AboutHeading>A Little Bit About Me</AboutHeading>
          <ProfileImg src="./profile-pic.jpg" alt="Profile Pic" width={170} />
          <AboutDescription>
            Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in
            Front-End and WordPress Development. Since beginning my journey as a
            freelance designer nearly 4 years ago, I've done remote work for
            agencies, consulted for startups, and collaborated with talented
            people to create digital products for both business and consumer
            use.
          </AboutDescription>
          <AboutDescription>
            When I'm not on the computer, I enjoy reading books, swimming, and
            petting animals.
          </AboutDescription>
          <TLDR>
            <TLDRHeading>TL;DR? Self Proclamations:</TLDRHeading>
            <TList>
              <TlItem>
                <img
                  src="./tldr-icons/web-design-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="Ui/UX"
                />
                <TlItemHeading>UX Enthusiast</TlItemHeading>
              </TlItem>
              <TlItem>
                <img
                  src="./tldr-icons/code-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="Web Dev"
                />
                <TlItemHeading>Web Developer</TlItemHeading>
              </TlItem>
              <TlItem>
                <img
                  src="./tldr-icons/reading-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="Reading"
                />
                <TlItemHeading>Books Lover</TlItemHeading>
              </TlItem>
            </TList>
          </TLDR>
        </ContentWrapper>
      </Container>
    </Section>
  );
}

export default About;
