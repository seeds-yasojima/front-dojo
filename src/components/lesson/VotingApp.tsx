import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Label } from "../ui/label";

type VoteValue = {
  id: string;
  label: string;
  count: number;
};

// データ
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
  const [votes, setVotes] = useState<VoteValue[]>(voteValues)

  const handleAddVoteCount = (key: string) => {
    setVotes((preVotes) => {
      const newVotes = preVotes.map((preVote) => {
        if (preVote.id === key) {
          return {
            ...preVote,
            count: preVote.count++
          }
        }
        return preVote
      })
      return newVotes
    })
  }

  const voteCountTotal = votes.reduce((acc: number, val: VoteValue) => {
    return acc + val.count
  }, 0)

  const calcVoteRate = (count: number) => {
    return Math.ceil(( count / voteCountTotal) * 100);
  }

  return <div>
    <div>
      {voteValues.map((voteValue, key) => (
        <Button
          key={key}
          style={{
            marginRight: 5
          }}
          onClick={() => handleAddVoteCount(voteValue.id)}
        >
          {voteValue.label}
        </Button>
      ))}
    </div>
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        {votes.map((vote, key) => {
          return (
            <div style={{ marginBottom: '5px' }} key={key}>
              <Label>{vote.label}</Label>
              <Progress value={calcVoteRate(vote.count)} className="w-[60%]" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  </div>;
};
