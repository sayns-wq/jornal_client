import dynamic from "next/dynamic";
import styles from "./createArticle.module.css";

const Editor = dynamic(() => import("@/modules/Editor/Editor"), { ssr: false });

export default function CreateArticle() {
  return (
    <main className={styles.mainPage}>
      <div className={styles.editorWrapper}>
        <Editor />
      </div>
    </main>
  );
}
