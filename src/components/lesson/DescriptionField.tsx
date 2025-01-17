import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const codeSample = `const voteValues = [
  {
    id: "attendance",
    label: "参加",
    count: 0,
  },
  {
    id: "absence",
    label: "不参加",
    count: 0,
  },
  {
    id: "consideration",
    label: "検討中",
    count: 0,
  },
];`;

const DescriptionField = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>チャレンジ課題１</CardTitle>
        <CardDescription>
          下記の内容を満たす実装をしてみましょう
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="text-sm space-y-4">
          <div>
            <dt className="font-semibold">課題内容：</dt>
            <dd className="leading-normal">
              投票項目を選んで結果を表示するアプリを作成してください。
            </dd>
          </div>
          <div>
            <dt className="font-semibold">要件：</dt>
            <dd className="leading-normal">
              <ul>
                <li>
                  投票ボタン（「参加」「不参加」「検討中」）を設置してください
                </li>
                <li>各投票数と投票割合をリアルタイムで表示してください</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">提供データ：</dt>
            <dd className="leading-normal">
              <pre className="bg-slate-950 text-white p-3 rounded-sm whitespace-pre-wrap">
                {codeSample}
              </pre>
            </dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
};

export default DescriptionField;
