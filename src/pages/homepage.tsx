import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import React from "react";
import _ from "lodash";

import Homepage from "../views/homepage";

type QueryParams = {
  category?: string;
}

type PageProps = {
  data?: string | null;
};

export const getServerSideProps: GetServerSideProps<
  PageProps,
  QueryParams
> = (async (context) => {
  const { query } = context;
  const category = query?.category;
  return {
    props: _.omitBy({
      data: category as string,
    }, _.isEmpty),
  };
  // eslint-disable-next-line prettier/prettier
}) satisfies GetServerSideProps<PageProps, QueryParams>;

const Home = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      {props.data}
      <Homepage />
    </>
  );
};

export default Home;
