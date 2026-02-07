import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className = "", ...props }: Props) {
  return (
    <label className="block">
      {label && <span className="mb-1 block text-sm font-medium text-slate-800">{label}</span>}
      <input
        className={
          "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm " +
          "outline-none focus:ring-2 focus:ring-slate-400 " +
          className
        }
        {...props}
      />
    </label>
  );
}
