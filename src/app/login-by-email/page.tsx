import { LoginByEmailFormContainer } from "@/app/login-by-email/LoginByEmailFormContainer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <main className="flex justify-center pt-16 px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Connexion</CardTitle>
          <CardDescription>
            Entrez votre email pour vous connecter
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginByEmailFormContainer />
        </CardContent>
      </Card>
    </main>
  );
}
