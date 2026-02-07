import * as React from "react";

export function Card({ className = "", ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={`bg-card text-card-foreground rounded-2xl border shadow-sm ${className}`.trim()}
      {...props}
    />
  );
}
