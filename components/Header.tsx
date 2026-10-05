"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Menu from "./Menu";

interface HeaderProps {
  onQuoteClick?: () => void;
}

export default function Header({ onQuoteClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full flex flex-col sticky top-0 z-50 shadow-xs">
      <Navbar
        onToggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <Menu
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={closeMobileMenu}
        onQuoteClick={onQuoteClick}
      />
    </header>
  );
}
