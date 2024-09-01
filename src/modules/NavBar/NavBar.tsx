"use client";
import { useDispatch } from "react-redux";
import styles from "./navBar.module.css";
import { setBlock } from "@/store/navBar/navBarSlice";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    tag: "tag_1",
  },
  {
    label: "About",
    tag: "tag_2",
  },
  {
    label: "Contact",
    tag: "tag_3",
  },
];
export default function NavBar() {
  const dispatch = useDispatch();
  return (
    <nav className={styles.navBar}>
      <ul>
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.label}
              onClick={() => dispatch(setBlock(navItem.label))}
            >
              {navItem.label}
            </li>
          );
        })}
        <Link href={"/createArticle"}>Создать</Link>
      </ul>
    </nav>
  );
}
