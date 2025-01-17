import { CustomTabsTrigger } from "./components/custom-tabs-trigger";
import { RootLayout } from "./components/layout/RootLayout";
import { FirstLesson } from "./components/lesson/FirstLesson";
import { TodoList } from "./components/sample/TodoList";
import { Tabs, TabsContent, TabsList } from "./components/ui/tabs";

function App() {
  const tabs = [
    {
      label: "Todoリスト",
      value: "todo",
      content: <TodoList />,
    },
    {
      label: "チャレンジ課題：投票アプリ",
      value: "item1",
      content: <FirstLesson />,
    },
    {
      label: "チャレンジ課題２",
      value: "item2",
      content: <>Comming Soon...</>,
    },
    {
      label: "チャレンジ課題３",
      value: "item3",
      content: <>Comming Soon...</>,
    },
  ];

  return (
    <RootLayout>
      <Tabs defaultValue="item1" className="w-full">
        <TabsList className="w-full justify-start border-b border-border bg-transparent p-0 rounded-none">
          {tabs.map((tab) => (
            <CustomTabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </CustomTabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            {tab.content || <div className="space-y-4">Comming soon...</div>}
          </TabsContent>
        ))}
      </Tabs>
    </RootLayout>
  );
}

export default App;
