import React from 'react';

type MenuItem = {
  id: string;
  label: string;
};

interface MobileMenuProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSelect: (id: string) => void;
};

const MobileMenu = ({ menuItems, activeSection, onSelect }: MobileMenuProps) => (
  <div
    id="mobile-menu"
    className="md:hidden mt-4 py-4 bg-zinc-900/95 rounded-2xl backdrop-blur-2xl border border-emerald-500/20 shadow-2xl shadow-emerald-500/10"
    role="menu"
  >
    {menuItems.map((item) => (
      <button
        key={item.id}
        onClick={() => onSelect(item.id)}
        className={`block w-full text-left px-6 py-3 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
          activeSection === item.id
            ? 'text-emerald-400 bg-emerald-500/10 border-l-2 border-emerald-400'
            : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
        }`}
        aria-current={activeSection === item.id ? 'page' : undefined}
        aria-label={`Navegar para a seção ${item.label}`}
      >
        {item.label}
      </button>
    ))}
  </div>
);

export default MobileMenu;
