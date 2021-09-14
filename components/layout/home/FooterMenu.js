import FooterMenuItem from "./FooterMenuItem";

function FooterMenu({ items }) {
  return (
    <ul className="flex gap-x-8">
      {items.map((item) => (
        <FooterMenuItem key={item.title} item={item} />
      ))}
    </ul>
  );
}

export default FooterMenu;
