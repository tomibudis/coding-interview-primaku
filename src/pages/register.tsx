import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import RegisterView from "~/views/register";

const RegisterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Auction System | Register</title>
      </Head>
      <RegisterView />
    </>
  );
};

export default RegisterPage;
