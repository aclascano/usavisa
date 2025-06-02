import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = "px-4 py-2 font-medium rounded-md transition ";
  const variants: Record<string, string> = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90",
    secondary: "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary)]/90",
    outline: "border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10",
  };
  return (
    <button className={`${baseClasses}${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
