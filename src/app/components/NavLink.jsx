import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white text-opacity-75 hover:text-opacity-100 hover:border-b-2 border-transparent border-b-0 transition duration-150 hover:underline"
    >
      {title}
    </Link>
  );
};

export default NavLink;
