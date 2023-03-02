import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

import MyItemView from "../views/my-items";

const MyItemsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auction System | Homepage</title>
      </Head>
      <MyItemView />
    </>
  );
};

export default MyItemsPage;
