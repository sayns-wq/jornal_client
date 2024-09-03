"use client";

import { useSelector } from "react-redux";
import { config } from "./config";
import Editor from "@/components/Editor/Editor";
import { RootState } from "@/store/store";

export default function Reader() {
  const data = useSelector((state: RootState) => state.editor.data);
  const resultConfig = {
    ...config,
    data: data,
  };
  return <Editor config={resultConfig} isEditable={false} id="readerjs" />;
}
