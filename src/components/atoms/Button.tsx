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
    primary: "bg-primary text-white hover:bg-accent2",
    secondary: "bg-secondary text-white hover:bg-secondary/90",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };
  return (
    <button className={`${baseClasses}${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
