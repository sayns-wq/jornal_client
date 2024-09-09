"use client";
import EditorJS from "@editorjs/editorjs";
import { Dispatch } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const saveEditorHandler = (
  editor: EditorJS | undefined,
  onSave: (data: any) => void
) => {
  editor &&
    editor
      .save()
      .then((outputData: any) => {
        onSave({
          articleData: outputData,
          tags: [],
          createdAt: new Date(),
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
  dispatch: Dispatch,
  onSave: (body: any) => void
) => {
  return [
    {
      label: "Back",
      function: () => backButtonHandler(router),
    },
    {
      label: "Save",
      function: () => saveEditorHandler(editor, onSave),
    },
  ];
};
