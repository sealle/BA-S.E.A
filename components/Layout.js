import React from "react";
import { Container } from "semantic-ui-react";
import Head from "next/head";
import ProfileHeader from "./ProfileHeader";

export default props => {
  return (
    <Container style={{ width: 650, border: 1 }}>
      <Head>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
        />
      </Head>
      {props.children}
    </Container>
  );
};
