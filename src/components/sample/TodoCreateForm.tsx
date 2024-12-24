import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  newTodoTitle: string;
  onChangeNewTodoTitle: (value: string) => void;
  onCreate: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const TodoCreateForm: React.FC<Props> = ({
  newTodoTitle,
  onChangeNewTodoTitle,
  onCreate,
}) => {
  return (
    <form onSubmit={onCreate}>
      <div className="pt-3 px-6 pb-4 border-t">
        <Label>新規タスク</Label>
        <div className="flex items-center gap-2">
          <Input
            className="bg-white"
            value={newTodoTitle}
            onChange={(e) => {
              onChangeNewTodoTitle(e.target.value);
            }}
          />
          <Button
            size="sm"
            className="w-24"
            type="submit"
            disabled={!newTodoTitle}
          >
            登録
          </Button>
        </div>
      </div>
    </form>
  );
};
