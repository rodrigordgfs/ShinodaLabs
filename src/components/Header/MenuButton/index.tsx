import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
};

const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => (
  <button
    onClick={onToggle}
    className="md:hidden text-zinc-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    aria-expanded={isOpen}
    aria-controls="mobile-menu"
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);

export default MenuButton;
