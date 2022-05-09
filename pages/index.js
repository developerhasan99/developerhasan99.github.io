/** @jsxImportSource @emotion/react */
import Head from "next/head";
import SvgBackground from "../components/svgBackground";
import { css } from "@emotion/react";
import { Container, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mehedi Hasan | Front-End & WordPress Developer</title>
      </Head>
      <main>
        <SvgBackground />
        <Container
          css={css`
            margin-top: 2rem;
          `}
        >
          <div
            css={css`
              padding: 30vh 0;
              text-align: center;
              z-index: 9;
            `}
          >
            <h1
              css={css`
                color: #fff;
                text-shadow: rgb(255 255 255 / 15%) 0px 5px 35px;
                letter-spacing: 0.025em;
                font-size: calc(3vw + 3vh + 3vmin);
              `}
            >
              Hi, I'm Mehedi Hasan
            </h1>
            <p
              className="lead"
              css={css`
                color: #eee;
              `}
            >
              Design and code nicely simple things, And I love what I do.
            </p>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default Home;
