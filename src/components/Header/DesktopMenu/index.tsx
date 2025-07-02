import React from "react";

type MenuItem = {
  id: string;
  label: string;
};

interface DesktopMenuProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSelect: (sectionId: string) => void;
}

const DesktopMenu = ({
  menuItems,
  activeSection,
  onSelect,
}: DesktopMenuProps) => (
  <div className="hidden md:flex items-center space-x-8" role="navigation">
    {menuItems.map((item) => (
      <button
        key={item.id}
        onClick={() => onSelect(item.id)}
        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
          activeSection === item.id
            ? "text-emerald-400"
            : "text-zinc-400 hover:text-white"
        }`}
        aria-current={activeSection === item.id ? "page" : undefined}
        aria-label={`Navegar para a seção ${item.label}`}
      >
        {item.label}
        {activeSection === item.id && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-full shadow-lg shadow-emerald-400/50" />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-r from-lime-500/10 to-emerald-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
      </button>
    ))}
  </div>
);

export default DesktopMenu;
