import React from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "secondary" | "ghost";

// Omit the handful of DOM event props whose types collide with Framer
// Motion's own animation/drag event signatures on <motion.button>.
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

interface ButtonProps extends NativeButtonProps {
  variant?: Variant;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ink text-paper hover:bg-signal focus-visible:bg-signal border border-ink hover:border-signal",
  secondary:
    "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-ink/[0.03]",
  ghost:
    "bg-transparent text-ink-soft hover:text-ink border border-transparent",
};

/**
 * Shared button/link control. Renders as a real <a> for external
 * navigation (GitHub, LinkedIn, resume) or a <button> for in-page actions.
 */
export function Button({
  variant = "primary",
  as = "button",
  href,
  target,
  rel,
  icon,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-md px-5 py-2.5 font-mono text-sm font-medium tracking-tight transition-colors duration-150 ${variantClasses[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={classes}
        whileTap={{ scale: 0.97 }}
      >
        {icon}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button className={classes} whileTap={{ scale: 0.97 }} {...rest}>
      {icon}
      {children}
    </motion.button>
  );
}
