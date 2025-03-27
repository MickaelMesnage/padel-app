import { Card, CardContent } from "@/components/ui/card";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 6000));

  return (
    <Card>
      <CardContent>KPI</CardContent>
    </Card>
  );
}
