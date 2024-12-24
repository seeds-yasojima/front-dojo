import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { PencilIcon, PencilOffIcon, Trash2 } from "lucide-react";
import { Todo } from "./TodoList";
import { useEffect, useRef, useState } from "react";
import { Input } from "../ui/input";
import { TodoItemButton } from "./TodoItemButton";

type Props = {
  todo: Todo;
  onCheckTodo: (e: boolean, todo: Todo) => void;
  onDelete: (id: number) => void;
  onChangeTitle: (id: number, title: string) => void;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onCheckTodo,
  onDelete,
  onChangeTitle,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  /** 編集モードの切り替え */
  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  /** `isEditing`がtrueになったときにフォーカスを実行 */
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li key={todo.id} className="px-6 py-2.5 flex gap-4 items-center">
      <div className="flex items-center space-x-3 flex-1">
        <Checkbox
          id={`${todo.id}`}
          className="data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
          onCheckedChange={(e) => onCheckTodo(e as boolean, todo)}
        />
        {isEditing ? (
          <Input
            ref={inputRef}
            className="bg-white"
            value={todo.title}
            onChange={(e) => {
              onChangeTitle(todo.id, e.target.value);
            }}
          />
        ) : (
          <Label
            htmlFor={`${todo.id}`}
            className={cn(
              "cursor-pointer leading-normal",
              todo.isComplete ? "line-through text-gray-400" : "text-black"
            )}
          >
            {todo.title}
          </Label>
        )}
      </div>
      <div className="flex">
        <TodoItemButton onClick={handleToggleEdit}>
          {isEditing ? (
            <PencilOffIcon className="size-4 text-muted-foreground" />
          ) : (
            <PencilIcon className="size-4 text-muted-foreground" />
          )}
        </TodoItemButton>
        <TodoItemButton onClick={() => onDelete(todo.id)}>
          <Trash2 className="size-4 text-muted-foreground" />
        </TodoItemButton>
      </div>
    </li>
  );
};
