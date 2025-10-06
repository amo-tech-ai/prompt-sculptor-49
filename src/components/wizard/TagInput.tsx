import { useState } from "react";
import { X, Plus } from "lucide-react";
import { BreezeButton } from "./BreezeButton";

interface TagInputProps {
  label: string;
  placeholder: string;
  tags: string[];
  onAdd: (tag: string) => void;
  onRemove: (index: number) => void;
  helperText?: string;
  required?: boolean;
}

export function TagInput({
  label,
  placeholder,
  tags,
  onAdd,
  onRemove,
  helperText,
  required = false,
}: TagInputProps) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-breeze-text block">
        {label}
        {required && <span className="text-breeze-orange ml-1">*</span>}
      </label>
      {helperText && <p className="text-sm text-breeze-text-muted">{helperText}</p>}

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="flex-1 bg-white border border-breeze-border text-breeze-text rounded-xl px-4 py-3 placeholder:text-breeze-text-muted focus:border-breeze-orange focus:ring-2 focus:ring-breeze-orange/20 outline-none transition-all"
        />
        <BreezeButton onClick={handleAdd} variant="secondary" size="md">
          <Plus className="w-4 h-4" />
        </BreezeButton>
      </div>

      {tags.length > 0 && (
        <div className="space-y-2 mt-3">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-breeze-cream/30 rounded-xl px-4 py-3 group"
            >
              <span className="text-breeze-text">{tag}</span>
              <button
                onClick={() => onRemove(index)}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-breeze-text-muted hover:text-breeze-orange"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
