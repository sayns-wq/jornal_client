"use client";
import CardList from "@/modules/CardList/CardList";
import styles from "./page.module.css";
import NavBar from "@/modules/NavBar/NavBar";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <main className={styles.main}>
      <Provider store={store}>
        <NavBar />
        <section className={styles.cardListWrapper}>
          <CardList />
        </section>
      </Provider>
    </main>
  );
}
