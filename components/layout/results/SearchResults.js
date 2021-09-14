import Link from "next/link";
import PaginationButtons from "./PaginationButtons";

function SearchResults({ results }) {
  const {
    formattedTotalResults: totalResults,
    formattedSearchTime: searchTime,
  } = results.searchInformation;

  return (
    <div className="mx-auto w-full px-3 sm:pl-[4%] md:pl-[9%] lg:pl-44">
      <p className="text-gray-500 text-sm mb-5 mt-3">
        About {totalResults} results ({searchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <Link href={result.link}>
              <a className="text-sm">{result.formattedUrl}</a>
            </Link>

            <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
              <Link href={result.link}>{result.title}</Link>
            </h2>
          </div>
          <p className="text-sm text-gray-700 tracking-tight line-clamp-2">
            {result.snippet}
          </p>
        </div>
      ))}
      <PaginationButtons />
    </div>
  );
}

export default SearchResults;
