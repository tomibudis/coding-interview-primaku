import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import LoginView from "~/views/login";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auction System | Login</title>
      </Head>
      <LoginView />
    </>
  );
};

export default LoginPage;
