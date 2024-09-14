import NavBar from "@/modules/NavBar/NavBar";
import React from "react";
import styles from "./NavBarPageLayout.module.css";

interface INavBarPageLayoutProps {
  children: React.ReactElement;
}

export default function NavBarPageLayout({ children }: INavBarPageLayoutProps) {
  return (
    <main className={styles.main}>
      <NavBar />
      {children}
    </main>
  );
}
