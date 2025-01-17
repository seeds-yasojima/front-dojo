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
  return <div>ここにアプリを実装してください</div>;
};
