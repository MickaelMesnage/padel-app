"use client";

import { PATHS } from "@/PATHS";
import { LoginByEmailFormFields } from "@/app/login-by-email/LoginByEmailFormFields";
import {
  loginByEmailFormSchema,
  LoginByEmailFormValues,
} from "@/app/login-by-email/loginByEmail.schema";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
// import { checkUserAlreadyExistAction } from "@/app/login-by-email/checkUserAlreadyExist.action";

export const LoginByEmailFormContainer = () => {
  const router = useRouter();

  const [pending, startTransition] = useTransition();

  const form = useForm<LoginByEmailFormValues>({
    resolver: zodResolver(loginByEmailFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = async ({ email }: LoginByEmailFormValues) => {
    try {
      startTransition(async () => {
        const { error } = await authClient.emailOtp.sendVerificationOtp({
          email,
          type: "sign-in",
        });

        if (error) {
          throw new Error(error.message);
        }

        reset();
        toast("Un code vous a été envoyé par email", {});

        router.push(PATHS.otpConfirmation({ email }));
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
      <FormProvider {...form}>
        <LoginByEmailFormFields />
        <Button className="w-full" type="submit" disabled={pending}>
          <LogIn className="mr-2 h-4 w-4" />
          Se connecter
        </Button>
      </FormProvider>
    </form>
  );
};
