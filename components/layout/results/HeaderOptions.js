import Link from "next/link";
import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex justify-evenly w-full text-sm text-gray-500 lg:justify-start lg:space-x-36 lg:pl-44 border-b">
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="Images" />
        <HeaderOption Icon={PlayIcon} title="Videos" />
        <HeaderOption Icon={NewspaperIcon} title="News" />
        <HeaderOption Icon={MapIcon} title="Maps" />
        <HeaderOption Icon={DotsVerticalIcon} title="More" />
      </div>
      {/* Right */}
      <div>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <a className="link">Settings</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="link">Tools</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderOptions;
