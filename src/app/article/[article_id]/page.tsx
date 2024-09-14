"use client";

import Reader from "@/modules/Reader/Reader";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import styles from "./article.module.css";
import NavBarPageLayout from "@/layouts/NavBarPageLayout/NavBarPageLayout";

export default function Article() {
  return (
    <Provider store={store}>
      <NavBarPageLayout>
        <div className={styles.readerWrapper}>
          <Reader />
        </div>
      </NavBarPageLayout>
    </Provider>
  );
}
