"use client";
import CardList from "@/modules/CardList/CardList";
import styles from "./page.module.css";
import NavBar from "@/modules/NavBar/NavBar";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import NavBarPageLayout from "@/layouts/NavBarPageLayout/NavBarPageLayout";

export default function Home() {
  return (
    <Provider store={store}>
      <NavBarPageLayout>
        <section className={styles.cardListWrapper}>
          <CardList />
        </section>
      </NavBarPageLayout>
    </Provider>
  );
}
