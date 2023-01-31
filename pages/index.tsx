import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/Header";
import {useAddress} from "@thirdweb-dev/react";



const Home: NextPage = () => {
    const address = useAddress();

  return (
    <div className="bg-teal-900 main-h-screen flex flex-col">
      <Head>
        <title>Vellmond draw</title>
      </Head>

      <Header />
    </div>
  )
}

export default Home
