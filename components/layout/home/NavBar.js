import Link from "next/link";
import AppsIcon from "../../ui/AppsIcon";
import Avatar from "../../avatar/Avatar";

function NavBar() {
  return (
    <header className="flex justify-between w-full p-3 text-sm text-gray-700">
      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <a className="link">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="link">Store</a>
          </Link>
        </li>
      </ul>

      <ul className="flex items-center space-x-4">
        <li>
          <Link href="/">
            <a className="link">Gmail</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="link">Images</a>
          </Link>
        </li>
        <li>
          <AppsIcon />
        </li>
        <li>
          <Avatar url="https://lh3.googleusercontent.com/ogw/ADea4I6fRe0SBbppDqysk-YEB-XoIQcHEcWNqFwJL-6xow=s64-c-mo" />
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
