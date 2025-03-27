import { CompleteProfileSection } from "@/app/home/CompleteProfileSection";
import { ReactNode } from "react";

export default function Layout({
  children,
  statistics,
  kpi,
}: {
  children: ReactNode;
  statistics: ReactNode;
  kpi: ReactNode;
}) {
  return (
    <main className="pb-16">
      <div className="bg-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 py-16 flex flex-col items-center gap-12">
          <h1 className="text-center text-secondary text-4xl font-bold">
            {children}
          </h1>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 mt-8">
        <div className="w-full flex flex-col gap-8">
          <CompleteProfileSection />
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-secondary text-2xl font-bold">Statistiques</h2>
            {statistics}
          </div>
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-secondary text-2xl font-bold">
              Les KPIs de Fullpadel
            </h2>
            {kpi}
          </div>
        </div>
      </div>
    </main>
  );
}
