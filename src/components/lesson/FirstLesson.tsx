import DescriptionField from "./DescriptionField";
import { VotingApp } from "./VotingApp";

export const FirstLesson = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-2">
        <DescriptionField />
      </div>
      <div className="col-span-2">
        <VotingApp />
      </div>
    </div>
  );
};
