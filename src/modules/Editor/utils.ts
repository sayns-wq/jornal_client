"use client";
import EditorJS from "@editorjs/editorjs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const saveEditorHandler = (editor: EditorJS | undefined) => {
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
};

const backButtonHandler = (router: AppRouterInstance) => {
  console.log(123123123123);
  router.push("/");
};

export const createButtons = (
  editor: EditorJS | undefined,
  router: AppRouterInstance
) => {
  return [
    {
      label: "Back",
      function: () => backButtonHandler(router),
    },
    {
      label: "Save",
      function: () => saveEditorHandler(editor),
    },
  ];
};
