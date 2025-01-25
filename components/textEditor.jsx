"use client"
import React, { useState } from 'react';

const TextEditor = () => {
  const [editorContent, setEditorContent] = useState('');
  const [fontSize, setFontSize] = useState('16px');
  const [fontColor, setFontColor] = useState('black');

  // Handling text input
  const handleChange = (event) => {
    setEditorContent(event.target.value);
  };

  // Bold
  const toggleBold = () => {
    document.execCommand('bold', false, null);
  };

  // Italic
  const toggleItalic = () => {
    document.execCommand('italic', false, null);
  };

  // Underline
  const toggleUnderline = () => {
    document.execCommand('underline', false, null);
  };

  // Font size change
  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  // Font color change
  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      {/* Editor Title */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-700">Text Editor</h2>
      </div>

      {/* Toolbar */}
      <div className="flex space-x-4 mb-6 justify-center">
        <button
          onClick={toggleBold}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
        >
          <b>B</b>
        </button>
        <button
          onClick={toggleItalic}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
        >
          <i>I</i>
        </button>
        <button
          onClick={toggleUnderline}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none"
        >
          <u>U</u>
        </button>
        <select
          value={fontSize}
          onChange={handleFontSizeChange}
          className="px-4 py-2 bg-gray-300 rounded-md"
        >
          <option value="16px">Font Size: 16px</option>
          <option value="18px">Font Size: 18px</option>
          <option value="20px">Font Size: 20px</option>
        </select>
        <input
          type="color"
          value={fontColor}
          onChange={handleFontColorChange}
          className="p-2 rounded-md"
        />
      </div>

      {/* Textarea (Content Area) */}
      <div className="border-2 border-gray-300 p-4 rounded-lg">
        <div
          contentEditable
          style={{ minHeight: '300px', fontSize: fontSize, color: fontColor }}
          className="outline-none"
          onInput={handleChange}
          dangerouslySetInnerHTML={{ __html: editorContent }}
        />
      </div>
    </div>
  );
};

export default TextEditor;
