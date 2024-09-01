"use client";
import { useRef } from "react";

import styles from "./editor.module.css";
import { InitEditor } from "./hooks";
import CircularNavigation from "../CircularNavigation/CircularNavigation";
import { createButtons } from "./utils";
import { useRouter } from "next/navigation";

export default function Editor() {
  const ejInstance = useRef(null);
  const [editor] = InitEditor({ instanceRef: ejInstance });
  const router = useRouter();
  return (
    <div className={styles.editor}>
      <div id="editorjs" ref={ejInstance}></div>

      <CircularNavigation buttons={createButtons(editor, router)} />
    </div>
  );
}
