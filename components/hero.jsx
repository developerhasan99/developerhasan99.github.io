import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Section = styled.section`
  background-image: url(./john-towner-JgOeRuGD_Y4-unsplash.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #000;
`;

const SectionInner = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 120px 0 70px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 15px;
  text-align: center;
  padding-top: 120px;
`;

const HeroHeading = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: calc(2vh + 2vw + 2vmin);
  letter-spacing: 5px;
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

const HeroCaption = styled.p`
  color: #fff;
  margin: 1.5rem 0;
  line-height: 1.5;
  word-spacing: 2px;
  font-weight: 300;
`;

const SDWrapper = styled.div`
  text-align: center;
  padding: 150px 0 50px 0;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const MouseImg = styled.img`
  animation: ${bounce} 1s ease infinite;
`;

function Hero() {
  return (
    <Section>
      <SectionInner>
        <Container>
          <HeroHeading>Hi, I’m Mehedi Hasan</HeroHeading>
          <HeroCaption>
            Design and code nicely simple things, And I love what I do.
          </HeroCaption>
          <SDWrapper>
            <MouseImg src="./scroll-down.svg" width={20} alt="scroll down!" />
          </SDWrapper>
        </Container>
      </SectionInner>
    </Section>
  );
}

export default Hero;
