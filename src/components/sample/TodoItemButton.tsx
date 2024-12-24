import React from "react";
import { Button } from "../ui/button";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

export const TodoItemButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
