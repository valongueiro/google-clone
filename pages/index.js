import Head from "next/head";
import HomeForm from "../components/layout/home/HomeForm";
import Footer from "../components/layout/home/Footer";
import NavBar from "../components/layout/home/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <Head>
        <title>Google 2.0 Clone by André Valongueiro</title>
        <meta
          name="description"
          content="Google 2.0 Clone by André Valongueiro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <HomeForm />

      <Footer />
    </div>
  );
}
