"use client";

import { useQuaresma } from "@/hooks/useQuaresma";
import OnboardingForm from "@/components/OnboardingForm";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  const {
    data,
    isLoaded,
    currentDay,
    totalDays,
    progressPercent,
    hasCheckedToday,
    accumulatedSavings,
    easterProjection,
    setupQuaresma,
    checkToday,
    resetData,
  } = useQuaresma();

  // Don't render until localStorage is read (avoid hydration flash)
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-500 text-sm">Carregando...</p>
        </div>
      </div>
    );
  }

  // Show onboarding if no data
  if (!data) {
    return <OnboardingForm onComplete={setupQuaresma} />;
  }

  // Show dashboard
  return (
    <Dashboard
      data={data}
      currentDay={currentDay}
      totalDays={totalDays}
      progressPercent={progressPercent}
      hasCheckedToday={hasCheckedToday}
      accumulatedSavings={accumulatedSavings}
      easterProjection={easterProjection}
      onCheck={checkToday}
      onReset={resetData}
    />
  );
}
