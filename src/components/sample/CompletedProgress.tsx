import React, { useMemo } from "react";
import { Progress } from "../ui/progress";
import { Todo } from "./TodoList";

type Props = {
  todoList: Todo[];
};

export const CompletedProgress: React.FC<Props> = ({ todoList }) => {
  /** 達成率 */
  const completedRate: number = useMemo(() => {
    // 空の場合は0を返す
    if (todoList.length === 0) return 0;

    // isCompleteがtrueのものだけを抽出して、その数を数える
    const completedCount = todoList.filter((todo) => todo.isComplete).length;

    // 完了率を計算する。小数点以下を切り上げる
    const rate = Math.ceil((completedCount / todoList.length) * 100);

    // 計算結果を返す
    return rate;
  }, [todoList]);

  return (
    <div className="px-4 pb-3">
      <div className="p-3 bg-slate-100 rounded">
        <div className="text-xs text-muted-foreground mb-0.5">
          タスク達成度：{completedRate}%
        </div>
        <Progress value={completedRate} />
      </div>
    </div>
  );
};
