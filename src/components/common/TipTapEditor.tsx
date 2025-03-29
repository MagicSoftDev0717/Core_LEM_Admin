"use client"; // Required for Next.js App Router

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { EditorState, LexicalEditor } from "lexical";
import { useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $getRoot, $getSelection } from "lexical";

const theme = {
  ltr: "text-left",
  rtl: "text-right",
  paragraph: "mb-2",
};

function MyOnChangePlugin({ onChange }: { onChange: (editorState: EditorState) => void }) {
  const [editor] = useLexicalComposerContext();
  return <OnChangePlugin onChange={onChange} />;
}

const LexicalEditor = () => {
  const [editorState, setEditorState] = useState<string>("");

  const handleChange = (editorState: EditorState, editor: LexicalEditor) => {
    editor.update(() => {
      const root = $getRoot();
      const selection = $getSelection();
      console.log("Editor State: ", root.getTextContent());
      setEditorState(root.getTextContent());
    });
  };

  const initialConfig = {
    namespace: "LexicalEditor",
    theme,
    onError: (error: Error) => console.error(error),
    nodes: [],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="border border-gray-300 rounded-md p-3 shadow-sm">
        <RichTextPlugin
          contentEditable={
            <ContentEditable className="w-full min-h-[150px] p-2 border border-gray-200 rounded-md outline-none" />
          }
          placeholder={<div className="absolute text-gray-400">Type something...</div>}
          ErrorBoundary={() => <div>Error loading editor</div>}
        />
        <HistoryPlugin />
        <MyOnChangePlugin onChange={handleChange} />
      </div>
    </LexicalComposer>
  );
};

export default LexicalEditor;
