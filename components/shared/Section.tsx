import * as React from "react";

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="py-14">{children}</section>;
}
