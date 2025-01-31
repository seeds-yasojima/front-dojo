import React from "react";
import { VoteValue } from "./VotingApp";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

type Props = {
  voteValue: VoteValue & { rate: number };
  onCountUp: (id: string) => void;
};

export const VoteUnit: React.FC<Props> = ({
  voteValue,
  onCountUp,
}) => {
  return (
    <>
      <Button className="w-16" onClick={() => onCountUp(voteValue.id)}>{voteValue.label}</Button>
      <Progress className="w-full" value={voteValue.rate} />
      <div className="min-w-24">
        <p className="shrink font-bold text-center">{voteValue.rate}％</p>
        <p className="text-slate-400 text-xs text-center">(投票数： {voteValue.count}票)</p>
      </div>
    </>
  )
};
