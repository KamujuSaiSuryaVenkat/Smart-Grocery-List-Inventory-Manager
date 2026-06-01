import {
  Bell,
  Search,
  LogOut,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

function Navbar() {

  const navigate =
    useNavigate();

  const handleLogout = () => {

    // Optional:
    localStorage.removeItem(
      "token"
    );

    navigate("/login");
  };

  return (
    <div className="h-[90px] border-b border-[#1A1F1A] px-8 flex items-center justify-between bg-[#0B0F0C]/80 backdrop-blur-xl sticky top-0 z-40">

      {/* Left */}
      <div>

        <h2 className="text-2xl font-semibold">
          Welcome Back,
          <span className="text-[#B6FF5C]">
            {" "}
            Shravani
          </span>
        </h2>

        <p className="text-[#8B9385] text-sm mt-2">
          Monitor your financial ecosystem in real-time.
        </p>

      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="bg-[#111411] border border-[#222722] rounded-2xl px-4 h-[52px] flex items-center gap-3 w-[280px]">

          <Search
            size={18}
            className="text-[#8B9385]"
          />

          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />

        </div>

        {/* Notification */}
        <button className="w-[52px] h-[52px] rounded-2xl bg-[#111411] border border-[#222722] flex items-center justify-center hover:border-[#B6FF5C] transition">

          <Bell size={20} />

        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="h-[52px] px-5 rounded-2xl bg-[#111411] border border-[#222722] flex items-center gap-3 hover:border-red-500 hover:text-red-400 transition"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </div>
  );
}

export default Navbar;