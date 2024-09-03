"use client";
import dynamic from "next/dynamic";
import styles from "./createArticle.module.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

const ArticleEditor = dynamic(
  () => import("@/modules/ArticleEditor/ArticleEditor"),
  { ssr: false }
);

export default function CreateArticle() {
  return (
    <Provider store={store}>
      <main className={styles.mainPage}>
        <div className={styles.editorWrapper}>
          <ArticleEditor />
        </div>
      </main>
    </Provider>
  );
}
