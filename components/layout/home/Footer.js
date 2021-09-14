import FooterMenu from "./FooterMenu";

const FOOTER_MENU_ABOUT = [
  { title: "About", link: "/" },
  { title: "Advertising", link: "/" },
  { title: "Business", link: "/" },
  { title: "How Search works", link: "/" },
];

const FOOTER_MENU_INFO = [
  { title: "Privacy", link: "/" },
  { title: "Terms", link: "/" },
  { title: "Settings", link: "/" },
];

function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-500 text-sm divide-y-[1px] divide-gray-300">
      <div className="px-8 py-3">
        <p>Brazil</p>
      </div>
      <div className="flex flex-col justify-between items-center md:flex-row gap-y-7 px-8 py-3">
        <FooterMenu items={FOOTER_MENU_ABOUT} />
        <FooterMenu items={FOOTER_MENU_INFO} />
      </div>
    </footer>
  );
}

export default Footer;
