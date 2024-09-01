import EditorJS from "@editorjs/editorjs";
import { MutableRefObject, useEffect, useState } from "react";
import { config } from "./config";

interface EditorConfig {
  instanceRef: MutableRefObject<(() => void) | null>;
}
export const InitEditor = ({ instanceRef }: EditorConfig) => {
  const [editor, setEditor] = useState<EditorJS>();
  useEffect(() => {
    if (instanceRef) {
      if (instanceRef.current === null) {
        setEditor(new EditorJS(config));
      }
      return () => {
        instanceRef.current = null;
      };
    }
  }, [instanceRef]);

  return [editor];
};
