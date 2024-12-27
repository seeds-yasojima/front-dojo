import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TodoItem } from "./TodoItem";
import { JsonCode } from "./JsonCode";
import { CompletedProgress } from "./CompletedProgress";
import { TodoCreateForm } from "./TodoCreateForm";

export type Todo = {
  id: number; // ID
  title: string; // タイトル
  isComplete: boolean; // 完了フラグ true: 完了, false: 未完了
};

const initialTodoList: Todo[] = [];

export const TodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodoList);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  const handleChangeNewTodoTitle = (value: string) => {
    // 新規Todoのタイトルを更新（valueには入力されたテキストが入っています。）
    setNewTodoTitle(value);
  };

  /** 削除 */
  const handleDelete = (id: number) => {
    if (confirm("削除しますか？")) {
      // 対象のidを省いたtodoList
      // Point: filterメソッドを使用して、削除対象のID以外のTodoを抽出
      const deletedTodoLists = todoList.filter((todo) => todo.id !== id);

      // Todoリストを更新
      setTodoList(deletedTodoLists);
    }
  };

  /** 新規登録 */
  const handleCreate = (e: React.FormEvent<HTMLFormElement>) => {
    // デフォルトのイベントをキャンセル
    e.preventDefault();

    // 新規のTodoタイトルが未入力の場合は何もしない
    if (!newTodoTitle) return;

    // 新規のTodoアイテムを作成
    const newTodoItem = {
      id: Math.floor(Math.random() * 10000), // ランダムな値。今回は新規のIDとして用いてます。
      title: newTodoTitle, // 今回入力されたタイトル（Point:useStateで管理しているnewTodoTitleが入ります）
      isComplete: false, // 完了フラグ 初期値はfalse(= 未完了)
    };

    // 新規のTodoアイテムを配列の先頭に追加
    // Point：スプレッド構文を使用して、newTodoItemを先頭に追加
    const newTodoList = [newTodoItem, ...todoList];

    // Todoリストを更新
    setTodoList(newTodoList);

    // 空文字をセットすることで入力欄をクリア
    setNewTodoTitle("");
  };

  /** チェックボックス */
  const handleCheckTodo = (id: number, value: boolean) => {
    // チェックボックスの状態を変更
    const newTodoList = todoList.map((item) => {
      // 対象のIDのTodoのisCompleteを変更
      // Point：スプレッド構文を使用して、isCompleteを上書き
      if (item.id === id) {
        return {
          ...item,
          isComplete: value, // チェックボックスの状態を変更。スプレッド構文を使用して、isCompleteを上書きする
        };
      }
      // 対象のID以外のTodoはそのまま返す
      return item;
    });

    // Todoリストを更新
    setTodoList(newTodoList);
  };

  /** タイトルの変更 */
  const handleChangeTitle = (id: number, title: string) => {
    // タイトルの内容を変更
    // Point：スプレッド構文を使用して、titleを上書き
    const newTodoList = todoList.map((item) => {
      // 対象のIDのTodoのtitleを変更
      if (item.id === id) {
        return {
          ...item,
          title: title,
        };
      }
      return item;
    });

    // Todoリストを更新
    setTodoList(newTodoList);
  };

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Todoリスト</CardTitle>
            <CardDescription>
              Todoの登録・変更・削除ができます。あなたのやる気を全力でサポート！
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            {todoList.length > 0 && <CompletedProgress todoList={todoList} />}
            <TodoCreateForm
              newTodoTitle={newTodoTitle}
              onChangeNewTodoTitle={handleChangeNewTodoTitle}
              onCreate={handleCreate}
            />
            {todoList.length === 0 ? (
              <div className="px-6 pb-6 text-slate-600 text-sm">
                タスクは未登録です。
              </div>
            ) : (
              <ul className="divide-y border-t">
                {todoList.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    todo={todo}
                    onCheckTodo={handleCheckTodo}
                    onDelete={handleDelete}
                    onChangeTitle={handleChangeTitle}
                  />
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
      <div>
        <JsonCode data={JSON.stringify({ newTodoTitle, todoList }, null, 2)} />
      </div>
    </div>
  );
};
