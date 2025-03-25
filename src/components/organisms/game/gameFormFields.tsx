"use client";

import { GameFormValues } from "./game.schema";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { levelMap, LEVELS } from "@/application/domain/constants/level.const";
import { Controller, useFormContext } from "react-hook-form";
import { Clock, Calendar, Users } from "lucide-react";
import { SelectNative } from "@/components/ui/select-native";

interface GameFormFieldsProps {
  padelComplexs: { id: string; name: string }[];
}

export const GameFormFields = ({ padelComplexs }: GameFormFieldsProps) => {
  const form = useFormContext<GameFormValues>();

  return (
    <>
      <FormField
        control={form.control}
        name="padelComplexId"
        render={({ field }) => (
          <FormItem className="text-start col-span-2">
            <FormLabel htmlFor={field.name}>Complexe</FormLabel>
            <FormControl>
              <SelectNative id={field.name} {...field}>
                <option value="" disabled>
                  Sélectionner un complexe
                </option>
                {padelComplexs.map((complex) => (
                  <option key={complex.id} value={complex.id}>
                    {complex.name}
                  </option>
                ))}
              </SelectNative>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="date"
        render={({ field }) => (
          <FormItem className="text-start col-span-2 md:col-span-1">
            <FormLabel htmlFor={field.name}>Date</FormLabel>
            <FormControl>
              <div className="relative">
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id={field.name}
                  type="date"
                  className="pl-10"
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="time"
        render={({ field }) => (
          <FormItem className="text-start col-span-2 md:col-span-1">
            <FormLabel htmlFor={field.name}>Heure</FormLabel>
            <FormControl>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id={field.name}
                  type="time"
                  className="pl-10"
                  {...field}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="durationInMinutes"
        render={({ field }) => (
          <FormItem className="text-start col-span-2 md:col-span-1">
            <FormLabel htmlFor={field.name}>Durée (minutes)</FormLabel>
            <FormControl>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id={field.name}
                  type="number"
                  min={30}
                  max={240}
                  className="pl-10"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="nbOfPlayersToFind"
        render={({ field }) => (
          <FormItem className="text-start col-span-2 md:col-span-1">
            <FormLabel htmlFor={field.name}>
              Nombre de joueurs manquants
            </FormLabel>
            <FormControl>
              <div className="relative">
                <Users className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                <Input
                  id={field.name}
                  type="number"
                  min={1}
                  max={20}
                  className="pl-10"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="level"
        render={({ field }) => (
          <FormItem className="text-start col-span-2">
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
        name="description"
        render={({ field }) => (
          <FormItem className="text-start col-span-2">
            <FormLabel htmlFor={field.name}>Description (optionnel)</FormLabel>
            <FormControl>
              <Textarea
                id={field.name}
                placeholder="Informations complémentaires..."
                className="resize-none"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};
