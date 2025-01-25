'use client'

import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { FaBold, FaItalic, FaUnderline, FaFont } from 'react-icons/fa'

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  // Bold toggle
  const toggleBold = () => {
    editor.chain().focus().toggleBold().run()
  }

  // Italic toggle
  const toggleItalic = () => {
    editor.chain().focus().toggleItalic().run()
  }

  // Underline toggle
  const toggleUnderline = () => {
    editor.chain().focus().toggleUnderline().run()
  }

  // Font size change
  const changeFontSize = (size) => {
    editor.chain().focus().setFontSize(size).run()
  }

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 text-black bg-white rounded-lg shadow-lg">
      {/* Toolbar */}
      <div className="flex space-x-4 mb-4 justify-start items-center">
        <button
          onClick={toggleBold}
          className="px-4 py-2 text-lg bg-gray-300 rounded-lg hover:bg-gray-400 transition-all duration-300"
        >
          <FaBold />
        </button>
        <button
          onClick={toggleItalic}
          className="px-4 py-2 text-lg bg-gray-300 rounded-lg hover:bg-gray-400 transition-all duration-300"
        >
          <FaItalic />
        </button>
        <button
          onClick={toggleUnderline}
          className="px-4 py-2 text-lg bg-gray-300 rounded-lg hover:bg-gray-400 transition-all duration-300"
        >
          <FaUnderline />
        </button>
        <select
          onChange={(e) => changeFontSize(e.target.value)}
          className="px-4 py-2 bg-gray-300 rounded-lg"
        >
          <option value="14px">Font Size: 14px</option>
          <option value="16px">Font Size: 16px</option>
          <option value="18px">Font Size: 18px</option>
          <option value="20px">Font Size: 20px</option>
        </select>
      </div>

      {/* Editor Content */}
      <div className="border-2 border-gray-300 p-4 rounded-lg bg-gray-50 min-h-[300px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}

export default Tiptap
