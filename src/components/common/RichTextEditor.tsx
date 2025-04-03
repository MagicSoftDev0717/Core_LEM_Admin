"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Strike from "@tiptap/extension-strike";
import Heading from "@tiptap/extension-heading";
import TextAlign from "@tiptap/extension-text-align";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";

export default function RichTextEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Italic,
      Underline,
      Strike,
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      BulletList,
      OrderedList,
      ListItem,
      Blockquote,
      CodeBlock,
    ],
    content: "<p>Start typing...</p>",
  });

  if (!editor) return null;

  return (
    <div className="border p-4 rounded-lg">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-2 border-b pb-2">
        {/* Formatting Buttons */}
        <button onClick={() => editor.chain().focus().toggleBold().run()} className={`px-3 py-1 border rounded ${editor.isActive("bold") ? "bg-gray-300" : ""}`}>
          B
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className={`px-3 py-1 border rounded ${editor.isActive("italic") ? "bg-gray-300" : ""}`}>
          I
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className={`px-3 py-1 border rounded ${editor.isActive("underline") ? "bg-gray-300" : ""}`}>
          U
        </button>
        <button onClick={() => editor.chain().focus().toggleStrike().run()} className={`px-3 py-1 border rounded ${editor.isActive("strike") ? "bg-gray-300" : ""}`}>
          S
        </button>

        {/* Headings */}
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 1 }) ? "bg-gray-300" : ""}`}>
          H1
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 2 }) ? "bg-gray-300" : ""}`}>
          H2
        </button>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`px-3 py-1 border rounded ${editor.isActive("heading", { level: 3 }) ? "bg-gray-300" : ""}`}>
          H3
        </button>

        {/* Lists */}
        <button onClick={() => editor.chain().focus().toggleBulletList().run()} className={`px-3 py-1 border rounded ${editor.isActive("bulletList") ? "bg-gray-300" : ""}`}>
          • List
        </button>
        <button onClick={() => editor.chain().focus().toggleOrderedList().run()} className={`px-3 py-1 border rounded ${editor.isActive("orderedList") ? "bg-gray-300" : ""}`}>
          1. List
        </button>

        {/* Blockquote & Code */}
        <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className={`px-3 py-1 border rounded ${editor.isActive("blockquote") ? "bg-gray-300" : ""}`}>
          “ Quote
        </button>
        <button onClick={() => editor.chain().focus().toggleCodeBlock().run()} className={`px-3 py-1 border rounded ${editor.isActive("codeBlock") ? "bg-gray-300" : ""}`}>
          <code>Code</code>
        </button>

        {/* Text Alignment */}
        <button onClick={() => editor.chain().focus().setTextAlign("left").run()} className="px-3 py-1 border rounded">
          ⬅
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign("center").run()} className="px-3 py-1 border rounded">
          ⏺
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign("right").run()} className="px-3 py-1 border rounded">
          ➡
        </button>
        <button onClick={() => editor.chain().focus().setTextAlign("justify").run()} className="px-3 py-1 border rounded">
          ↔
        </button>

        {/* Undo & Redo */}
        <button onClick={() => editor.chain().focus().undo().run()} className="px-3 py-1 border rounded">
          ⬅ Undo
        </button>
        <button onClick={() => editor.chain().focus().redo().run()} className="px-3 py-1 border rounded">
          ➡ Redo
        </button>
      </div>

      {/* Text Editor */}
      <EditorContent editor={editor} className="dark:bg-gray-600 dark:text-gray-300 border p-2 rounded bg-white min-h-[200px] focus:outline-none focus:ring-0 focus:border-transparent" />
    </div>
  );
}
