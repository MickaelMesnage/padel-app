"use client";

import { updateProfileAction } from "@/app/profile/updateProfile.action";
import {
  profileFormSchema,
  ProfileFormValues,
} from "@/components/organisms/profile/profile.schema";
import { ProfileFormFields } from "@/components/organisms/profile/profileFormFields";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useTransition } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";

interface ProfileFormContainerProps {
  defaultValues: ProfileFormValues;
}

export const ProfileFormContainer = ({
  defaultValues,
}: ProfileFormContainerProps) => {
  const [pending, startTransition] = useTransition();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const { handleSubmit } = form;

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      startTransition(async () => {
        const res = await updateProfileAction(data);

        if (res?.serverError) {
          throw new Error(res.serverError);
        }

        toast("Profil mis à jour");
      });
    } catch (error) {
      console.error(error);
      toast.error("Une erreur est survenue");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-8">
      <FormProvider {...form}>
        <ProfileFormFields />
        <Button className="w-full" type="submit" disabled={pending}>
          <Pencil className="mr-2 h-4 w-4" />
          Enregistrer
        </Button>
      </FormProvider>
    </form>
  );
};
