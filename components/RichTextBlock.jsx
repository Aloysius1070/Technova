"use client"

import React from "react"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import { Trash2, Bold, Italic, UnderlineIcon, Strikethrough, Code, GripVertical } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Toggle } from "@/components/ui/toggle"

export function RichTextBlock({ id, content, onUpdate, onDelete, isLastBlock, dragHandleProps }) {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: content,
    onUpdate: ({ editor }) => {
      onUpdate(id, editor.getHTML())
    },
  })

  if (!editor) {
    return null
  }

  return (
    <div className="group relative border rounded-md p-4">
      <div className="flex items-center space-x-2 mb-2">
        <div {...dragHandleProps} className="cursor-move">
          <GripVertical className="h-5 w-5 text-gray-400" />
        </div>
        <Toggle
          size="sm"
          pressed={editor.isActive("bold")}
          onPressedChange={() => editor.chain().focus().toggleBold().run()}
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("italic")}
          onPressedChange={() => editor.chain().focus().toggleItalic().run()}
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("underline")}
          onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
          aria-label="Toggle underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("strike")}
          onPressedChange={() => editor.chain().focus().toggleStrike().run()}
          aria-label="Toggle strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </Toggle>
        <Toggle
          size="sm"
          pressed={editor.isActive("code")}
          onPressedChange={() => editor.chain().focus().toggleCode().run()}
          aria-label="Toggle code"
        >
          <Code className="h-4 w-4" />
        </Toggle>
      </div>
      <EditorContent editor={editor} />
      {!isLastBlock && (
        <Button
          onClick={() => onDelete(id)}
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          variant="destructive"
          size="icon"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete block</span>
        </Button>
      )}
    </div>
  )
}

