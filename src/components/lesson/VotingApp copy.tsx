import { useState } from "react";
import { VoteUnit } from "./VoteUnit";
import { Button } from "@/components/ui/button";
import { PieChart_Donut } from "./PieChart-Donut";
import { VoteButtonUnit } from "./VoteButtonUnit";

// 型宣言
export type VoteValue = {
  id: string;
  label: string;
  count: number;
};

// 初期データ
const voteValues: VoteValue[] = [
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
  const [voteValueList, setVoteValueList] = useState<VoteValue[]>(voteValues);
  const [extraFlg, setExtraFlg] = useState(false);
  const [pieChartFlg, setPieChartFlg] = useState(false);

  // 投票数カウントアップ
  const countUp = (id: string) => {
    setVoteValueList((prevVoteValues) =>
      prevVoteValues.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  // 投票リセット
  const countReset = () => {
    setVoteValueList(voteValues);
    setExtraFlg(true);
  }

  // Extra Mode
  const pieChartDisplay = () => {
    setPieChartFlg(true);
  }

  return (
    <div className="rounded-xl border text-card-foreground bg-card shadow">
      <section className="p-6">
        <h2 className="text-lg text-center font-semibold leading-none tracking-tight">投票結果</h2>
        <div className="grid grid-cols-[auto,1fr,auto] gap-2 items-center mt-6">
          {voteValueList.map((item) => (
            <VoteUnit
              key={item.id}
              voteValue={item}
              voteValueList={voteValueList}
              onCountUp={countUp}
             />
          ))}
        </div>

        <div className="flex mt-6">
          {extraFlg && (
            <Button className="bg-indigo-400 hover:bg-indigo-600" onClick={pieChartDisplay}>Extra Mode On</Button>
          )}
          <Button className="bg-slate-400 ml-auto" onClick={countReset}>投票リセット</Button>
        </div>

        {pieChartFlg && (
          <div>
            <PieChart_Donut voteValueList={voteValueList} />
            <div className="flex flex-row flex-nowrap gap-4">
              {voteValueList.map((item) => (
                <VoteButtonUnit
                  key={item.id}
                  voteValue={item}
                  voteValueList={voteValueList}
                  onCountUp={countUp}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
