"use client";

import { CheckCircle, XCircle } from "lucide-react";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type ButtonSmallProps = {
  label: string;
  variant?: "accept" | "decline";
  isLoading?: boolean;
  fullSize?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "children">;

export const ButtonSmall = forwardRef<HTMLButtonElement, ButtonSmallProps>(
  (
    {
      label,
      variant = "accept",
      isLoading = false,
      fullSize = false,
      className,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          "px-2 py-1 rounded-lg relative",
          "disabled:opacity-30 disabled:cursor-not-allowed",
          "group/small-button",
          "border",
          "bg-white",
          variant === "accept" &&
            "hover:bg-state-success-light border-state-success-default",
          variant === "decline" &&
            "hover:bg-state-error-light  border-state-error-default",
          className
        )}
        {...rest}
      >
        <div
          className={twMerge(
            fullSize && "w-full flex items-center justify-center gap-1",
            isLoading && "invisible"
          )}
        >
          <div className="flex items-center gap-1">
            {variant === "accept" ? (
              <CheckCircle className="size-5 stroke-green-400" />
            ) : (
              <XCircle className="size-5 stroke-red-400" />
            )}
            <span className="text-sm font-semibold text-primary">{label}</span>
          </div>
        </div>
      </button>
    );
  }
);

ButtonSmall.displayName = "ButtonSmall";
