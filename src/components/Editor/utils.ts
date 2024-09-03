"use client";
import { setData } from "@/store/editor/editorSlice";
import EditorJS from "@editorjs/editorjs";
import { Dispatch } from "@reduxjs/toolkit";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const saveEditorHandler = (
  editor: EditorJS | undefined,
  dispatch: Dispatch
) => {
  editor &&
    editor
      .save()
      .then((outputData: any) => {
        dispatch(setData(outputData));
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
  dispatch: Dispatch
) => {
  return [
    {
      label: "Back",
      function: () => backButtonHandler(router),
    },
    {
      label: "Save",
      function: () => saveEditorHandler(editor, dispatch),
    },
  ];
};
