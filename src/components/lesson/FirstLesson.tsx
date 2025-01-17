import { useState } from "react";
import DescriptionField from "./DescriptionField";
import { Button } from "../ui/button";
import { Progress } from "../ui/progress";

type VoteValue = {
  id: string;
  label: string;
  count: number;
};

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

const VotingApp = () => {
  const [votes, setVotes] = useState<VoteValue[]>(voteValues);

  const handleVote = (id: string) => {
    setVotes((preVotes) => {
      const newVotes = preVotes.map((vote) => {
        if (vote.id === id) {
          return {
            ...vote,
            count: vote.count + 1,
          };
        }
        return vote;
      });
      return newVotes;
    });
  };

  const totalCount = votes.reduce((acc, vote) => acc + vote.count, 0);

  const getVoteRate = (count: number) => {
    const rate = Math.round((count / totalCount) * 100);
    return rate;
  };

  return (
    <div>
      <h1 className="font-bold mb-1">投票アプリ</h1>
      <div className="flex gap-2">
        {votes.map((option) => (
          <Button
            key={option.id}
            onClick={() => handleVote(option.id)}
            variant="outline"
          >
            {option.label}
          </Button>
        ))}
      </div>
      <div className="p-4 bg-slate-200 rounded-sm mt-3">
        <div className="text-xs text-muted-foreground">
          投票数: {totalCount}票
        </div>
        <div className="space-y-1 mt-1">
          {votes.map((vote) => {
            const rate = getVoteRate(vote.count);
            return (
              <div key={vote.id} className="flex items-center gap-2">
                <div className="w-1/3 text-sm">
                  {vote.label}：<span>{vote.count}</span>票（{rate || 0}%）
                </div>
                <div className="flex-1">
                  <Progress value={rate} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VotingApp;

export const FirstLesson = () => {
  return (
    <div className="w-[600px] mx-auto space-y-4">
      <div>
        <DescriptionField />
      </div>
      {/* <div>
        <VotingApp />
      </div> */}
    </div>
  );
};
