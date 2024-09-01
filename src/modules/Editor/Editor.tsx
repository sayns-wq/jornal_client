"use client";
import { useRef } from "react";

import styles from "./editor.module.css";
import { InitEditor } from "./hooks";

export default function Editor() {
  const ejInstance = useRef(null);
  const [editor] = InitEditor({ instanceRef: ejInstance });

  return (
    <div className={styles.editor}>
      <div id="editorjs" ref={ejInstance}></div>
      <button
        onClick={() => {
          console.log(editor);
          editor &&
            editor
              .save()
              .then((outputData: any) => {
                console.log("Article data: ", outputData);
              })
              .catch((error: any) => {
                console.log("Saving failed: ", error);
              });
        }}
      >
        Сохранить
      </button>
    </div>
  );
}
