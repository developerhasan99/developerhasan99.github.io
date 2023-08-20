import styled from "@emotion/styled";
import Container from "../common/container";
import SectionHeader from "../common/section-header";

const Section = styled.section`
	padding: 80px 0;
	background-color: #f0f0f0;
`;

const LinksWrapper = styled.div`
	display: flex;
	justify-content: center;
	gap: 40px;
	@media (max-width: 768px) {
		& {
			flex-direction: column;
		}
	}
`;

const A = styled.a`
	display: block;
	text-align: center;
`;

const P = styled.p`
	margin: 0;
`;

const Separator = styled.p`
	font-size: 30px;
	line-height: 30px;
	text-align: center;
`;

function Contact() {
	return (
		<Section id="contact">
			<Container>
				<SectionHeader
					heading="What's Next?"
					description={[
						"Currently, I am looking for new opportunities, and my inbox is always open. If you are looking forward to working with me,",
						<br key="randidforbr2" />,
						"or want to say hi, I'll try my best to get back to you!",
					]}
				/>
				<LinksWrapper>
					<A href="https://www.linkedin.com/in/mehedihasan347/">
						<img
							width={150}
							height={45}
							src="./network/linkedin-logo-2013.svg"
							alt="Linkedin"
						/>
						<P>Connect me on Linkedin</P>
					</A>
					<Separator>or</Separator>
					<A href="https://www.upwork.com/freelancers/~01e0d306e3c729d12e">
						<img
							width={150}
							height={45}
							src="./network/upwork.svg"
							alt="Linkedin"
						/>
						<P>Hire me on Upwork</P>
					</A>
				</LinksWrapper>
			</Container>
		</Section>
	);
}

export default Contact;
