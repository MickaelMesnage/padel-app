import { CompleteProfileSection } from "@/app/home/CompleteProfileSection";
import { FeedbacksSection } from "@/app/home/FeedbacksSection";
import { KPISection } from "@/app/home/KPISection";
import { StatisticsSection } from "@/app/home/StatisticsSection";
import { Loading } from "@/components/molecules/Loading";
import { Suspense } from "react";

export default async function Page() {
  return (
    <main className="pb-16">
      <div className="container mx-auto max-w-3xl px-4 mt-8">
        <div className="w-full flex flex-col gap-8">
          <FeedbacksSection />
          <CompleteProfileSection />
          <div className="w-full flex flex-col gap-4">
            <h2 className="text-secondary text-2xl font-bold">Statistiques</h2>
            <Suspense fallback={<Loading />}></Suspense>
            <StatisticsSection />
          </div>
          <div className="w-full flex flex-col gap-8">
            <h2 className="text-secondary text-2xl font-bold">
              Les KPIs de Fullpadel
            </h2>
            <KPISection />
          </div>
        </div>
      </div>
    </main>
  );
}
