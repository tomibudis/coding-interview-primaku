import Head from "next/head";
import React from "react";

import Homepage from "../views/homepage";

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <Homepage />
    </>
  );
};

export default Home;
