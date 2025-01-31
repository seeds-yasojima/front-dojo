import { useState, useMemo } from "react";
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
  const [voteValuesData, setVoteValuesData] = useState<VoteValue[]>(voteValues);
  const [displayFlags, setDisplayFlags] = useState({ extra: false, pieChart: false });

  // 全体の投票数
  const totalVotes = voteValuesData.reduce((acc, curr) => acc + curr.count, 0);

  // 投票率を計算し、各要素に追加
  const voteValuesDataAddRate = useMemo(() => {
    return voteValuesData.map((item) => ({
    ...item,
    rate: totalVotes > 0 ? Math.floor((item.count / totalVotes) * 100) : 0,
  }));
}, [voteValuesData, totalVotes]);

  // 投票数カウントアップ
  const countUp = (id: string) => {
    setVoteValuesData((prevVoteValues) =>
      prevVoteValues.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      )
    );
  }

  // 投票リセット
  const countReset = () => {
    setVoteValuesData(voteValues);
    setDisplayFlags({ ...displayFlags, extra: true });
  }

  // Extra Mode
  const showPieChart = () => {
    setDisplayFlags((prevState) => ({
      ...prevState,
      pieChart: !prevState.pieChart,
     }));
  }

  return (
    <div className="rounded-xl border text-card-foreground bg-card shadow">
      <section className="p-6">
        <h2 className="text-lg text-center font-semibold leading-none tracking-tight">投票結果</h2>
        <div className="grid grid-cols-[auto,1fr,auto] gap-2 items-center mt-6">
          {voteValuesDataAddRate.map((item) => (
            <VoteUnit
              key={item.id}
              voteValue={item}
              onCountUp={countUp}
             />
          ))}
        </div>

        <div className="flex mt-6">
          {displayFlags.extra && (
            <Button className="bg-indigo-400 hover:bg-indigo-600" onClick={showPieChart}>Extra Mode On</Button>
          )}
          <Button className="bg-slate-400 ml-auto" onClick={countReset}>投票リセット</Button>
        </div>

        {displayFlags.pieChart && (
          <div>
            <PieChart_Donut
              voteValuesData={voteValuesData}
              totalVotes={totalVotes}
            />
            <div className="flex flex-row flex-nowrap gap-4">
              {voteValuesDataAddRate.map((item) => (
                <VoteButtonUnit
                  key={item.id}
                  voteValue={item}
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
