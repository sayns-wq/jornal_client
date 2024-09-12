"use client";
import EditorJS from "@editorjs/editorjs";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const saveEditorHandler = (
  editor: EditorJS | undefined,
  router: AppRouterInstance,
  onSave: (data: any) => any
) => {
  editor &&
    editor
      .save()
      .then((outputData: any) => {
        const saveData = onSave({
          articleData: outputData,
          tags: [],
          createdAt: new Date(),
        });
        saveData.then(({ data }: any) => {
          router.push(`createArticle/fillMetadata/${data.id}`);
        });
      })
      .catch((error: any) => {
        console.log("Saving failed: ", error);
      });
};

const backButtonHandler = (router: AppRouterInstance) => {
  router.push("/");
};

export const createButtons = (
  editor: EditorJS | undefined,
  router: AppRouterInstance,
  onSave: (body: any) => void
) => {
  return [
    {
      label: "Back",
      function: () => backButtonHandler(router),
    },
    {
      label: "Save",
      function: () => saveEditorHandler(editor, router, onSave),
    },
  ];
};
