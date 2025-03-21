import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const BrandWithPulseAnimation = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "w-full flex flex-col gap-8 items-center justify-center",
        className
      )}
    >
      <div className="animate-pulse">
        <Image height={24} width={120} src="/fullmotiv-dark.svg" alt="logo" />
      </div>
    </div>
  );
};
