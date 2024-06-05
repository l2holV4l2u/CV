import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="p-1 text-[#ADB7BE] hover:text-white transition-all duration-100 text-xl hover:text-[22px]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
