import { getEmailFromQueryParams } from "@/app/otp-confirmation/getEmailFromQueryParams";
import { OTPConfirmationFormContainer } from "@/app/otp-confirmation/OTPConfirmationFormContainer";
import { SearchParams } from "@/utils/SearchParams.type";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const email = await getEmailFromQueryParams(searchParams);

  return (
    <main className="flex justify-center pt-16 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>OTP Confirmation</CardTitle>
          <CardDescription>Entrez le code OTP envoyé par email</CardDescription>
        </CardHeader>
        <CardContent>
          <OTPConfirmationFormContainer email={email} />
        </CardContent>
      </Card>
    </main>
  );
}
