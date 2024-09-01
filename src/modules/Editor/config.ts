import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";
// @ts-ignore
import LinkTool from "@editorjs/link";
import Delimiter from "@editorjs/delimiter";
import Quote from "@editorjs/quote";
import Table from "@editorjs/table";
// @ts-ignore
import CodeTool from "@editorjs/code";

// @ts-ignore
import Marker from "@editorjs/marker";

// @ts-ignore
import Underline from "@editorjs/underline";
import { ToolConstructable } from "@editorjs/editorjs";

export const config = {
  holder: "editorjs",
  placeholder: "Start writing your story...",
  tools: {
    header: Header,
    list: List,
    image: {
      class: ImageTool as unknown as ToolConstructable,
      config: {
        byFile: "", // Your backend file uploader endpoint
        byUrl: "", // Your endpoint that provides uploading by Url
      },
    },
    linkTool: LinkTool,
    delimiter: Delimiter,
    quote: {
      class: Quote as unknown as ToolConstructable,
      shortcut: "ALT+Q",
    },
    table: Table,
    code: CodeTool,
    Marker: Marker,
    underline: Underline,
  },
};
