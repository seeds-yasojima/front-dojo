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
              投票項目を選んで結果を表示するアプリを作成してください
            </dd>
          </div>
          <div>
            <dt className="font-semibold">要件：</dt>
            <dd className="leading-normal">
              <ul className="list-disc list-inside">
                <li>
                  投票ボタン（「参加」「不参加」「検討中」）を設置してください
                </li>
                <li>
                  各投票数と各投票割合を、投票ボタンと連動した形で表示してください
                </li>
                <li>
                  プログレスバーを使って投票割合を視覚的に表現してください
                </li>
                <li>下記の提供データを用いて実装してください</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-semibold">提供データ：</dt>
            <dd className="leading-normal mt-1">
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
