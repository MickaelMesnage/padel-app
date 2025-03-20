"use client";

import { ProfileFormValues } from "@/components/organisms/profile/profile.schema";
import { Checkbox } from "@/components/ui/checkbox";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { levelMap, LEVELS } from "@/application/domain/constants/level.const";
import { User } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";

export const ProfileFormFields = () => {
  const form = useFormContext<ProfileFormValues>();

  return (
    <>
      <FormField
        control={form.control}
        name="nickname"
        render={({ field }) => (
          <FormItem className="text-start col-span-2 md:col-span-1">
            <FormLabel htmlFor={field.name}>Pseudo</FormLabel>
            <FormControl>
              <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Votre pseudo"
                  className="pl-10"
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* <FormItem className="text-start col-span-2 md:col-span-1">
        <FormLabel>Niveau</FormLabel>
        <Controller
          control={form.control}
          name="level"
          render={({ field }) => (
            <>
              <div className="flex items-center flex-wrap gap-2">
                {LEVELS.map((level) => (
                  <button
                    key={level}
                    type="button"
                    className={`w-10 rounded-md border p-2 hover:bg-primary/10 ${
                      field.value === level &&
                      "bg-primary/35 text-primary-foreground"
                    }`}
                    onClick={() => field.onChange(level)}
                  >
                    {levelMap[level]}
                  </button>
                ))}
              </div>
              <FormMessage />
            </>
          )}
        />
      </FormItem> */}

      <FormField
        control={form.control}
        name="level"
        render={({ field }) => (
          <FormItem className="text-start col-span-2 md:col-span-1">
            <FormLabel htmlFor={field.name}>Niveau</FormLabel>
            <Controller
              control={form.control}
              name="level"
              render={({ field }) => (
                <div className="flex items-center flex-wrap gap-2">
                  {LEVELS.map((level) => (
                    <button
                      key={level}
                      type="button"
                      className={`w-10 rounded-md border p-2 hover:bg-primary/10 ${
                        field.value === level &&
                        "bg-primary/35 text-primary-foreground"
                      }`}
                      onClick={() => field.onChange(level)}
                    >
                      {levelMap[level]}
                    </button>
                  ))}
                </div>
              )}
            />
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="acceptEmails"
        render={({ field }) => (
          <FormItem className="flex flex-row items-start">
            <FormControl>
              <Checkbox
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel>J&apos;accepte de recevoir des emails</FormLabel>
          </FormItem>
        )}
      />
    </>
  );
};
