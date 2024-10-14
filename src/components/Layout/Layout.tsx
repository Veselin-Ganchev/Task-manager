import React from "react";
import ThemeSwitcher from "@components/ThemeSwitcher/ThemeSwitcher";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <ThemeSwitcher />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
