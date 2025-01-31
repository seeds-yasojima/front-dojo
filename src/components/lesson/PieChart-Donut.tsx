"use client"

import React, { useMemo } from "react"
import { Label, Pie, PieChart } from "recharts"
import { VoteValue } from "./VotingApp";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  attendance: {
    label: "参加",
    color: "#10b981",
  },
  absence: {
    label: "不参加",
    color: "#ef4444",
  },
  consideration: {
    label: "検討中",
    color: "#8b5cf6",
  },
  default: {
    label: "無投票",
    color: "#94a3b8",
  },
} satisfies ChartConfig

type Props = {
  voteValuesData: VoteValue[];
  totalVotes: number;
};

type AdjustedData = {
  label: string;
  count: number;
  fill: string;
};

export const PieChart_Donut: React.FC<Props> = ({
  voteValuesData,
  totalVotes,
}) => {
  // データが空（無投票）の判断
  const hasData = useMemo(() => {
    return voteValuesData.some((item) => item.count > 0)
  }, [voteValuesData]);

  const adjustedData: AdjustedData[] = useMemo(() => {
    const data = voteValuesData.map((item) => ({
      label: item.label,
      count: item.count,
      fill: `var(--color-${item.id})`,
    }));
    if (!hasData) {
      data.push({
        label: "無投票",
        count: 1,
        fill: "var(--color-default)",
      });
    }
    return data;
  }, [voteValuesData, hasData]);

  return (
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            {hasData && (
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
            )}
            <Pie
              data={adjustedData}
              dataKey="count"
              nameKey="label"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-muted-foreground"
                        >
                          投票数
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 12}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVotes}
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
  )
}
