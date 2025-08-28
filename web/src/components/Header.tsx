import Link from "next/link";

const NavLink = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Features", path: "/Features" },
  { name: "Contact", path: "/contact" },
  { name: "Logout", path: "/logout" },
];

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 pt-9 bg-[hsl(212,70%,17%)] text-white">
      <div className="flex gap-2"> <button className=" bg-[hsl(212,70%,24%)] w-15 font-bold text-2xl rounded-2xl">RM</button> <h1 className="text-3xl font-bold mb-4 md:mb-0">RemedyMate</h1></div> 
      <nav className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
        {NavLink.map(({ name, path }) => (
          <Link key={name} href={path}>
            {name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
