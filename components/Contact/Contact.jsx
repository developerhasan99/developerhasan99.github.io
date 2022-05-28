import styled from "@emotion/styled";
import Col from "../common/Col";
import Container from "../common/container";
import Row from "../common/row";
import SectionHeader from "../common/section-header";
import Form from "./Form";

const Section = styled.section`
  padding: 80px 0;
  background-color: #f0f0f0;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const A = styled.a`
  text-align: center;
`;

const P = styled.p`
  margin: 0;
`;

const Separetor = styled.p`
  font-size: 30px;
  line-height: 0.7;
`;

function Contact() {
  return (
    <Section>
      <Container>
        <SectionHeader
          heading="What's Next?"
          description={[
            "Currently, I am looking for new opportunities, and my inbox is always open. If you are looking forward to working with me,",
            <br key="randidforbr2" />,
            "or want to say hi, I'll try my best to get back to you!",
          ]}
        />
        <Flex>
          <A href="https://www.linkedin.com/in/mehedihasan347/">
            <img
              width={150}
              height={45}
              src="./network/linkedin-logo-2013.svg"
              alt="Linkedin"
            />
            <P>Connect me on Linkedin</P>
          </A>
          <Separetor>or</Separetor>
          <A href="https://www.upwork.com/freelancers/~01e0d306e3c729d12e">
            <img
              width={150}
              height={45}
              src="./network/upwork.svg"
              alt="Linkedin"
            />
            <P>Hire me on Upwork</P>
          </A>
        </Flex>
      </Container>
    </Section>
  );
}

export default Contact;
