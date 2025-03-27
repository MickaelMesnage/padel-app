import { Card, CardContent } from "@/components/ui/card";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <Card>
      <CardContent>Statistics</CardContent>
    </Card>
  );
}
