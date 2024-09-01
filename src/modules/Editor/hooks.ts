import EditorJS from "@editorjs/editorjs";
import { ReactElement, RefObject, useEffect, useState } from "react";
import { config } from "./config";

interface EditorConfig {
  instanceRef: RefObject<ReactElement>;
}
export const InitEditor = ({ instanceRef }: EditorConfig) => {
  const [editor, setEditor] = useState<EditorJS>();
  useEffect(() => {
    if (instanceRef) {
      if (instanceRef.current === null) {
        setEditor(new EditorJS(config));
      }
    }
  }, [instanceRef]);

  return [editor];
};
