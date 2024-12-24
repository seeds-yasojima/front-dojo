import { CustomTabsTrigger } from "./components/custom-tabs-trigger";
import { RootLayout } from "./components/layout/RootLayout";
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
      label: "Item1",
      value: "item1",
    },
    {
      label: "Item2",
      value: "item2",
    },
  ];

  return (
    <RootLayout>
      <Tabs defaultValue="todo" className="w-full">
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
