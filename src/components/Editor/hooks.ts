import EditorJS from "@editorjs/editorjs";
import { MutableRefObject, useEffect, useState } from "react";

interface EditorConfig {
  instanceRef: MutableRefObject<(() => void) | null>;
  config: EditorJS.EditorConfig;
}
export const InitEditor = ({ instanceRef, config }: EditorConfig) => {
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
