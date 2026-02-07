import * as React from "react";

type Variant = "solid" | "outline" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition " +
  "focus:outline-none focus:ring-2 focus:ring-ring/40 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:opacity-95",
  secondary: "bg-secondary text-secondary-foreground hover:opacity-95",
  outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
  ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "solid",
  size = "md",
  asChild = false,
  className = "",
  children,
  ...props
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<any>;
    return React.cloneElement(child, {
      className: `${classes} ${child.props.className || ""}`.trim(),
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
