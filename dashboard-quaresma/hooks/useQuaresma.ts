"use client";

import { useState, useEffect, useCallback } from "react";

export interface QuaresmaData {
  sacrifice: string;
  dailyCost: number;
  goal: string;
  completedDays: number[]; // array of day indices (1-based) that were checked
  startedAt: string; // ISO date string
}

const STORAGE_KEY = "quaresma_data_2026";

// Quaresma 2026: Feb 18 → Apr 5 (40 days)
const QUARESMA_START = new Date("2026-02-18T00:00:00");
const TOTAL_DAYS = 40;

export function getDayIndex(date: Date = new Date()): number {
  const start = new Date(QUARESMA_START);
  start.setHours(0, 0, 0, 0);
  const target = new Date(date);
  target.setHours(0, 0, 0, 0);
  const diff = Math.floor((target.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return Math.max(1, Math.min(diff + 1, TOTAL_DAYS));
}

export function getDayDate(dayIndex: number): Date {
  const d = new Date(QUARESMA_START);
  d.setDate(d.getDate() + dayIndex - 1);
  return d;
}

export function getCurrentDay(): number {
  const now = new Date();
  const start = new Date(QUARESMA_START);
  start.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0) return 0; // Before Quaresma
  if (diff >= TOTAL_DAYS) return TOTAL_DAYS; // After Quaresma
  return diff + 1;
}

export function getTodayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
}

export function useQuaresma() {
  const [data, setData] = useState<QuaresmaData | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? (JSON.parse(stored) as QuaresmaData) : null;
    } catch {
      return null;
    }
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Mark as loaded after first client render (safe: only sets boolean once)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoaded(true);
  }, []);

  // Save to localStorage whenever data changes
  const save = useCallback((newData: QuaresmaData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    setData(newData);
  }, []);

  const setupQuaresma = useCallback(
    (sacrifice: string, dailyCost: number, goal: string) => {
      const newData: QuaresmaData = {
        sacrifice,
        dailyCost,
        goal,
        completedDays: [],
        startedAt: new Date().toISOString(),
      };
      save(newData);
    },
    [save]
  );

  const currentDay = getCurrentDay();

  // Check if today (current day index) is already completed
  const hasCheckedToday = data
    ? data.completedDays.includes(currentDay)
    : false;

  const checkToday = useCallback(() => {
    if (!data) return;
    if (data.completedDays.includes(currentDay)) return; // idempotent
    const updated: QuaresmaData = {
      ...data,
      completedDays: [...data.completedDays, currentDay].sort((a, b) => a - b),
    };
    save(updated);
  }, [data, currentDay, save]);

  const resetData = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setData(null);
  }, []);

  const accumulatedSavings = data
    ? data.completedDays.length * data.dailyCost
    : 0;

  const easterProjection = data ? data.dailyCost * TOTAL_DAYS : 0;

  const progressPercent =
    currentDay > 0 ? Math.round((currentDay / TOTAL_DAYS) * 100) : 0;

  return {
    data,
    isLoaded,
    currentDay,
    totalDays: TOTAL_DAYS,
    hasCheckedToday,
    accumulatedSavings,
    easterProjection,
    progressPercent,
    setupQuaresma,
    checkToday,
    resetData,
    quaresmaStart: QUARESMA_START,
  };
}
