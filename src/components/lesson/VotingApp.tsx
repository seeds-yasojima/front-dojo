import { useRef } from "react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Progress } from "../ui/progress";
import { Label } from "../ui/label";

type VoteValue = {
  id: string;
  label: string;
  count: number;
  rate: number;
};

// データ
const voteValues: VoteValue[] = [
  {
    id: "attendance",
    label: "参加",
    count: 0,
    rate: 0,
  },
  {
    id: "absence",
    label: "不参加",
    count: 0,
    rate: 0,
  },
  {
    id: "consideration",
    label: "検討中",
    count: 0,
    rate: 0,
  },
];

export const VotingApp = () => {
  const voteCountTotal = useRef(0)

  const calcRate = () => {
    voteValues.forEach((voteValue) => {
      if (voteCountTotal.current === 0 || voteValue.count === 0) {
        voteValue.rate = 0
        return;
      }
      
      voteValue.rate = Math.ceil((voteValue.count / voteCountTotal.current) * 100);
    })
  }

  const handleAddVoteCount = (key: number) => {
    voteValues[key].count++

    const total = voteValues.reduce((acc: number, val: VoteValue) => {
      return acc + val.count
    }, 0)
    voteCountTotal.current = total
    calcRate()
  }

  return <div>
    <div>
      {voteValues.map((voteValue, key) => (
        <Button
          key={key}
          style={{
            marginRight: 5
          }}
          onClick={() => handleAddVoteCount(key)}
        >
          {voteValue.label}
        </Button>
      ))}
    </div>
    <Card style={{ marginTop: 10 }}>
      <CardContent>
        {voteValues.map((voteValue, key) => {
          return (
            <div style={{ marginBottom: '5px' }} key={key}>
              <Label>{voteValue.label}</Label>
              <Progress value={voteValue.rate} className="w-[60%]" />
            </div>
          )
        })}
      </CardContent>
    </Card>
  </div>;
};
