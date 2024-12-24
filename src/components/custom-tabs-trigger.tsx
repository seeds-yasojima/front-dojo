import React from "react";
import { TabsTrigger } from "@/components/ui/tabs";

interface CustomTabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export function CustomTabsTrigger({ value, children }: CustomTabsTriggerProps) {
  return (
    <TabsTrigger
      value={value}
      className="relative border-b-2 border-transparent px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:rounded-none"
    >
      {children}
    </TabsTrigger>
  );
}
