"use client";
import { useEffect, useRef, useState } from "react";

import styles from "./editor.module.css";
import { InitEditor } from "./hooks";
import { createButtons } from "./utils";
import { useRouter } from "next/navigation";
import { baseConfig } from "./config";
import { useDispatch } from "react-redux";
import CircularNavigation from "@/modules/CircularNavigation/CircularNavigation";

export default function Editor({
  config,
  isEditable,
  id,
  dataToRender,
  onSave = null,
}: any) {
  const ejInstance = useRef(null);
  const dispatch = useDispatch();
  const resultConfig = { ...baseConfig, ...config, holder: id };

  const [editor] = InitEditor({
    instanceRef: ejInstance,
    config: resultConfig,
  });

  const router = useRouter();

  useEffect(() => {
    if (dataToRender) {
      editor?.isReady.then(() => {
        editor?.render(dataToRender);
      });
    }
  }, [editor, dataToRender]);
  return (
    <div className={styles.editor}>
      <div id={id} ref={ejInstance}></div>
      {isEditable && (
        <CircularNavigation
          buttons={createButtons(editor, router, dispatch, onSave)}
        />
      )}
    </div>
  );
}
