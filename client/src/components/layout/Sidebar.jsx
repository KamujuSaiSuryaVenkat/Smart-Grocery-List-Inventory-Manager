import {
  LayoutDashboard,
  ArrowLeftRight,
  PieChart,
  Wallet,
  Upload,
  ScanLine,
} from "lucide-react";

import {
  NavLink,
} from "react-router-dom";

function Sidebar() {

  const menuItems = [
    {
      icon: LayoutDashboard,
      path: "/dashboard",
    },

    {
      icon: ArrowLeftRight,
      path: "/transactions",
    },

    {
      icon: PieChart,
      path: "/analytics",
    },

    {
      icon: Wallet,
      path: "/budgets",
    },

    {
      icon: Upload,
      path: "/import",
    },

    {
      icon: ScanLine,
      path: "/ocr",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[110px] bg-[#0D110D] border-r border-[#1A1F1A] flex flex-col items-center py-8 z-50">

      {/* Logo */}
      <div className="w-14 h-14 rounded-2xl bg-[#B6FF5C] flex items-center justify-center text-black font-bold text-2xl shadow-[0_0_40px_rgba(182,255,92,0.15)]">

        M

      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-5 mt-14">

        {menuItems.map((item, index) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `
                w-14 h-14 rounded-2xl
                flex items-center justify-center
                transition-all duration-300
                border

                ${
                  isActive
                    ? "bg-[#B6FF5C] text-black border-[#B6FF5C] shadow-[0_0_30px_rgba(182,255,92,0.15)] scale-105"
                    : "bg-[#111411] text-[#8B9385] border-[#1A1F1A] hover:border-[#2A322A] hover:text-white hover:bg-[#151915]"
                }
                `
              }
            >

              <Icon size={22} />

            </NavLink>

          );
        })}

      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-[-120px] w-[240px] h-[240px] bg-[#B6FF5C]/5 blur-3xl rounded-full" />

    </div>
  );
}

export default Sidebar;