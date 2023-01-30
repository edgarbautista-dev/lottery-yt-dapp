import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-emerald-900 main-h-screen flex flex-col">
      <Head>
        <title>Vellmond draw</title>
      </Head>
        <Header/>
    </div>
  )
}

export default Home
