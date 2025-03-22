import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const UserCardWrapper = ({
  className,
  ...rest
}: React.ComponentProps<"div">) => {
  return (
    <Card
      className={cn("w-full p-1 sm:p-1 rounded-2xl", className)}
      {...rest}
    />
  );
};
