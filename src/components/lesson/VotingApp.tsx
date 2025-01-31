import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { VoteProgresses } from "./VoteProgresses";
import { JsonCode } from "./JsonCode";

type VoteValue = {
  id: string;
  label: string;
  count: number;
};

// データ
const initialVoteValues: VoteValue[] = [
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
];

export const VotingApp = () => {
  // 投票データ
  const [voteValues, setVoteValues] = useState<VoteValue[]>(initialVoteValues);

  /** 投票 */
  const vote = (id: string) => {
    // 指定IDの投票数をインクリメント
    const newVoteValues = voteValues.map((voteValue) => {
      if (voteValue.id === id) {
        voteValue.count++;
      }

      return voteValue;
    });

    // 投票データを更新
    setVoteValues(newVoteValues);
  };

  // 参加の投票数
  const attendanceVotes = voteValues.flatMap(({ id, count }) => id === "attendance" ? [count] : [])[0];

  // 不参加の投票数
  const absenceVotes = voteValues.flatMap(({ id, count }) => id === "absence" ? [count] : [])[0];

  // 検討中の投票数
  const considerationVotes = voteValues.flatMap(({ id, count }) => id === "consideration" ? [count] : [])[0];

  // 合計投票数
  const totalVotes = attendanceVotes + absenceVotes + considerationVotes;

  return (
    <Card>
      <CardHeader>
        <CardTitle>投票</CardTitle>
        <CardDescription>
          投票をお願いします！
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="grid gap-4 grid-cols-3">
            <Button
              className="bg-sky-500 hover:bg-sky-700"
              onClick={() => vote("attendance")}
            >
              参加
            </Button>
            <Button
              className="bg-red-500 hover:bg-red-700"
              onClick={() => vote("absence")}
            >
              不参加
            </Button>
            <Button
              className="bg-gray-500 hover:bg-gray-700"
              onClick={() => vote("consideration")}
            >
              検討中
            </Button>
          </div>
          {totalVotes === 0 ? (
            <div className="grid gap-1">
              <div className="text-slate-600 text-sm">
                一票も投票されていません。
              </div>
            </div>
          ) : (
            <VoteProgresses
              attendanceVotes={attendanceVotes}
              absenceVotes={absenceVotes}
              considerationVotes={considerationVotes}
              totalVotes={totalVotes}
            />
          )}
          <div className="grid gap-1">
            <JsonCode data={JSON.stringify({ voteValues }, null, 2)} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
