"use client"

import React, { useState } from "react"
import { v4 as uuidv4 } from "uuid"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import { RichTextBlock } from "./RichTextBlock"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export function TextBlockEditor() {
  const [blocks, setBlocks] = useState([{ id: uuidv4(), content: "" }])

  const addBlock = () => {
    setBlocks([...blocks, { id: uuidv4(), content: "" }])
  }

  const updateBlock = (id, content) => {
    setBlocks(blocks.map((block) => (block.id === id ? { ...block, content } : block)))
  }

  const deleteBlock = (id) => {
    setBlocks(blocks.filter((block) => block.id !== id))
  }

  const onDragEnd = (result) => {
    if (!result.destination) return

    const newBlocks = Array.from(blocks)
    const [reorderedItem] = newBlocks.splice(result.source.index, 1)
    newBlocks.splice(result.destination.index, 0, reorderedItem)

    setBlocks(newBlocks)
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Draggable Text Block Editor</h1>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="blocks">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef} className="space-y-4">
              {blocks.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`${snapshot.isDragging ? "opacity-50" : ""}`}
                    >
                      <RichTextBlock
                        id={block.id}
                        content={block.content}
                        onUpdate={updateBlock}
                        onDelete={deleteBlock}
                        isLastBlock={index === blocks.length - 1}
                        dragHandleProps={provided.dragHandleProps}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button onClick={addBlock} className="w-full" variant="outline">
        <PlusCircle className="mr-2 h-4 w-4" />
        Add Block
      </Button>
    </div>
  )
}

