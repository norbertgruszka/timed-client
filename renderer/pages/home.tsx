import React from "react";
import Head from "next/head";
import Login from "./login-page/login-page";
import ActivitiesPage from "./activities/ActivitiesPage";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Timed Client</title>
      </Head>

      <ActivitiesPage />

      <Login />
    </React.Fragment>
  );
}

export default Home;
