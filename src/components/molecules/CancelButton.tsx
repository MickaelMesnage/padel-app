"use client";

import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

export const CancelButton = () => {
  const router = useRouter();

  return (
    <AlertDialogCancel onClick={() => router.back()}>Annuler</AlertDialogCancel>
  );
};
