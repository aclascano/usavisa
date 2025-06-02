import Link from "next/link";
import React from "react";

type NavLinkProps = {
  href: string;
  label: string;
};

export function NavLink({ href, label }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="
        text-[var(--color-gray)]
        hover:text-[var(--color-primary)]
        transition-colors
        px-3 py-2
        text-sm
        font-medium
      "
    >
      {label}
    </Link>
  );
}
