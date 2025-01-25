import { useState, useRef, useEffect } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TextBlock({ id, content, onUpdate, onDelete, isLastBlock }) {
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [isEditing]);

  const handleChange = (e) => {
    onUpdate(id, e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setIsEditing(false);
    }
  };

  return (
    <div className="group relative">
      {isEditing ? (
        <Textarea
          ref={textareaRef}
          value={content}
          onChange={handleChange}
          onBlur={() => setIsEditing(false)}
          onKeyDown={handleKeyDown}
          className="w-full p-2 border rounded"
          rows={3}
        />
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          className="w-full p-2 border rounded min-h-[3em] cursor-text"
        >
          {content || <span className="text-gray-400">Click to edit...</span>}
        </div>
      )}
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
  );
}
