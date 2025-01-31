import { Progress } from "../ui/progress";

type Props = {
  attendanceVotes: number;
  absenceVotes: number;
  considerationVotes: number;
  totalVotes: number;
};

export const VoteProgresses: React.FC<Props> = ({
  attendanceVotes,
  absenceVotes,
  considerationVotes,
  totalVotes,
}) => {
  // 参加率
  const attendanceRate = attendanceVotes / totalVotes * 100;

  // 不参加率
  const absenceRate = absenceVotes / totalVotes * 100;

  // 検討中率
  const considerationRate = considerationVotes / totalVotes * 100;

  return (
    <>
      <div className="grid gap-1">
        <div className="text-slate-600 text-sm">
          {totalVotes}人中{attendanceVotes}人が参加です。({attendanceRate.toFixed(2)}％)
        </div>
        <Progress
          className="[&>*]:bg-sky-500"
          value={attendanceRate}
          max={100}
        />
      </div>
      <div className="grid gap-1">
        <div className="text-slate-600 text-sm">
          {totalVotes}人中{absenceVotes}人が不参加です。({absenceRate.toFixed(2)}％)
        </div>
        <Progress
          className="[&>*]:bg-red-500"
          value={absenceRate}
          max={100}
        />
      </div>
      <div className="grid gap-1">
        <div className="text-slate-600 text-sm">
          {totalVotes}人中{considerationVotes}人が検討中です。({considerationRate.toFixed(2)}％)
        </div>
        <Progress
          className="[&>*]:bg-gray-500"
          value={considerationRate}
          max={100}
        />
      </div>
    </>
  );
};
