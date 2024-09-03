"use client";

import Reader from "@/modules/Reader/Reader";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import styles from "./article.module.css";

export default function Article() {
  return (
    <Provider store={store}>
      <main className={styles.mainPage}>
        <div className={styles.readerWrapper}>
          <Reader />
        </div>
      </main>
    </Provider>
  );
}
