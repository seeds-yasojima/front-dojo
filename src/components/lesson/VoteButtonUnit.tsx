import React from "react";
import { VoteValue } from "./VotingApp";
import { Button } from "@/components/ui/button";

type Props = {
  voteValue: VoteValue & { rate: number };
  onCountUp: (id: string) => void;
};

export const VoteButtonUnit: React.FC<Props> = ({
  voteValue,
  onCountUp,
}) => {
  const colorMap: Record<string, string> = {
    attendance: "bg-emerald-500 hover:bg-emerald-600",
    absence: "bg-red-500 hover:bg-red-600",
    consideration: "bg-violet-500 hover:bg-violet-600",
  };

  return (
    <div className="basis-1/3 p-2 rounded-xl border shadow space-y-1.5">
      <div className="text-center">
        <Button className={`${colorMap[voteValue.id]} text-white`} onClick={() => onCountUp(voteValue.id)}>{voteValue.label}</Button>
      </div>
      <p className="font-bold text-lg text-center">
        {voteValue.rate}％
        <span className="text-slate-400 text-xs font-normal ms-1">/ {voteValue.count}票</span>
      </p>
    </div>
  );
};
