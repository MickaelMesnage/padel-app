import { Card, CardContent } from "@/components/ui/card";

export const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Card className="hidden sm:block">
        <CardContent>{children}</CardContent>
      </Card>
      <div className="sm:hidden">{children}</div>
    </>
  );
};
