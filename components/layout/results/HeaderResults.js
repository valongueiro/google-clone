import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useRef } from "react";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Avatar from "../../avatar/Avatar";
import HeaderOptions from "./HeaderOptions";
import logo from "../../../assets/googlelogo_color_92x30dp.png";

function HeaderResults() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?q=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex items-center w-full p-6">
        <Image
          src={logo}
          width={92}
          height={30}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form
          onSubmit={search}
          className="flex flex-grow items-center px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl"
        >
          <input
            ref={searchInputRef}
            type="search"
            defaultValue={router.query.q}
            className="flex-grow w-full focus:outline-none"
          />
          <MicrophoneIcon className="h-6 mr-3 text-blue-500 border-l-2 border-gray-300 ml-3 pl-3 hidden sm:inline-block" />
          <div onClick={search} className="cursor-pointer">
            <SearchIcon className="h-5 mb-1 text-blue-500 hidden sm:inline-block" />
          </div>
        </form>
        <Avatar
          url="https://lh3.googleusercontent.com/ogw/ADea4I6fRe0SBbppDqysk-YEB-XoIQcHEcWNqFwJL-6xow=s64-c-mo"
          className="ml-auto"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default HeaderResults;
