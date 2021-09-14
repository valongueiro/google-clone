import Link from "next/link";

function FooterMenuItem({ item }) {
  return (
    <li>
      <Link href={item.link}>
        <a className="link">{item.title}</a>
      </Link>
    </li>
  );
}

export default FooterMenuItem;
