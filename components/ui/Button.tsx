import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

const buttonVariants = {
  primary: "bg-accent text-on-accent hover:opacity-90",
  secondary: "border border-border bg-surface text-text hover:border-primary",
  ghost: "text-muted hover:text-accent",
} as const;

const buttonSizes = {
  sm: "gap-1.5 px-4 py-2 text-xs",
  md: "gap-2 px-6 py-3 text-sm",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

const baseClasses =
  "inline-flex shrink-0 items-center justify-center rounded-full font-semibold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0";

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type LinkProps = SharedProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };
type NativeProps = SharedProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: never };

export type ButtonProps = LinkProps | NativeProps;

export function Button({ variant = "primary", size = "md", className, href, ...rest }: ButtonProps) {
  const classes = cn(baseClasses, buttonVariants[variant], buttonSizes[size], className);

  if (href !== undefined) {
    return <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
