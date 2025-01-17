import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

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
        </dl>
      </CardContent>
    </Card>
  );
};

export default DescriptionField;
