import { Button } from "@/components/ui/button";
import { PATHS } from "@/PATHS";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <Button
      variant="outline"
      aria-label="Se connecter"
      title="Se connecter"
      asChild
    >
      <Link href={PATHS.loginByEmail}>Se connecter</Link>
    </Button>
  );
};
