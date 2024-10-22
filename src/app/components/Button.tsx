import { ReactNode } from 'react';
import { cva } from "class-variance-authority";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  color?: 'primary' | 'dark' | 'outline';
  link?: string;
}

const Button = ({
  children,
  className,
  onClick,
  disabled = false,
  color = 'primary',
}: ButtonProps) => {
  const button = cva(["w-max", "py-3", "px-5", "text-base", "font-medium", "text-center", "rounded-lg", "focus:ring-2", "focus:ring-lead"], {
    variants: {
      color: {
        primary: [
          "bg-lead",
          "text-primary",
          "hover:bg-lead-dark",
          "disabled:bg-disabled",
          "disabled:hover:bg-lead"
        ],
        dark: [
          "bg-dark",
          "text-lead",
          "hover:bg-darker",
          "disabled:text-disabled",
          "disabled:hover:bg-dark",
        ],
        outline: [
          "bg-transparent",
          "text-lead",
          "border",
          "border-lead",
          "hover:border-lead-dark",
          "hover:text-lead-dark",
          "disabled:text-disabled",
          "disabled:border-disabled",
          "disabled:hover:bg-transparent",
        ],
      },
    },
    defaultVariants: {
      color: "primary"
    },
  });
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className={button({ color }) + " " + className}
      >
        {children}
      </button>
    </>
  );
};

export default Button;