import React from "react";

type Props = {
  data: string;
};

export const JsonCode: React.FC<Props> = ({ data }) => {
  return (
    <div className="rounded-md bg-slate-950 overflow-hidden">
      <div className="bg-slate-800 text-white p-2 text-xs">JSON</div>
      <pre className=" text-white font-mono p-5 text-sm whitespace-pre-wrap max-h-[600px] overflow-auto">
        <code>{data}</code>
      </pre>
    </div>
  );
};
