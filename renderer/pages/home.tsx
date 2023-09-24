import React from 'react';
import Head from 'next/head';
import Login from '../components/login-btn'

function Home() {
    return (
        <React.Fragment>
            <Head>
                <title>Home - Nextron (with-typescript-material-ui)</title>
            </Head>
            <Login/>
        </React.Fragment>
    );
};

export default Home;
