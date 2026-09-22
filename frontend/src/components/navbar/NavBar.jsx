const NavBar = () => {
  return (
    <div className="flex items-center justify-between max-w-[80%] ml-20 h-16">
      {/* logo */}
      <div className="text-3xl font-bold text-white tracking-tight">
        Staying.com
      </div>
      {/* button */}
      <div className="flex gap-4">
        <a
          href=""
          className="bg-white text-blue-600 px-4 py-2 rounded font-bold"
        >
          Register
        </a>

        <a
          href=""
          className="bg-white text-blue-600 px-4 py-2 rounded font-bold"
        >
          Sign in
        </a>
      </div>
    </div>
  );
};

export default NavBar;
