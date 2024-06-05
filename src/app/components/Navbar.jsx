import NavLink from "./NavLink";

const navLinks = [{title: "Research", path: "#research"},{title: "Awards",path: "#awards"},{title: "Extracurricular Activities",path: "#extra"}];

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 bg-[#121212]/50 backdrop-blur-sm mx-auto w-screen p-4 border-b border-b-black">
      <ul className="flex justify-center items-center gap-4">
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title}/>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;