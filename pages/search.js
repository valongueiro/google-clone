import Head from "next/dist/shared/lib/head";
import HeaderResults from "../components/layout/results/HeaderResults";
import Response from "../_DummyData";
import { useRouter } from "next/router";
import SearchResults from "../components/layout/results/SearchResults";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.q} - Google Search</title>
        <meta
          name="description"
          content="Google 2.0 Clone by André Valongueiro"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderResults />

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const apiKey = process.env.API_KEY;
  const cxKey = process.env.CONTEXT_KEY;

  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxKey}&q=${context.query.q}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
