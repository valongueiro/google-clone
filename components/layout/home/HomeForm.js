import { useRef } from "react";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Button from "../../ui/Button";
import logo from "../../../assets/googlelogo_color_272x92dp.png";

function HomeForm() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?q=${term}`);
  };

  return (
    <form
      onSubmit={search}
      className="flex flex-col items-center flex-grow w-full mt-16"
    >
      <Image src={logo} width={272} height={92} />
      <div className="flex items-center w-full max-w-md rounded-full border border-gray-200 mt-5 px-5 py-3 hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          type="search"
          className="focus:outline-none flex-grow"
          ref={searchInputRef}
        />
        <Tippy
          content={<p className="text-xs">Search by voice</p>}
          delay={200}
          duration={100}
          arrow={false}
          placement="bottom"
          theme="translucent"
        >
          <div>
            <MicrophoneIcon className="h-5 ml-3" />
          </div>
        </Tippy>
      </div>
      <div className="flex justify-content space-x-4 mt-8">
        <Button type="submit" label="Google Search" />
        <Button label="I'm Feeling Lucky" />
      </div>
    </form>
  );
}

export default HomeForm;
