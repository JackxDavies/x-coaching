import { useState, useCallback } from 'react';
import { FoodEntry, DailyLog } from '../types';

const generateId = () => `${Date.now()}-${Math.random()}`;

export const useDailyLog = () => {
  const [dailyLog, setDailyLog] = useState<DailyLog>({
    date: new Date().toISOString().split('T')[0],
    entries: [],
    totals: {
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    },
  });

  const addEntry = useCallback(
    (food: Omit<FoodEntry, 'id' | 'timestamp'>) => {
      setDailyLog((prev) => {
        const newEntry: FoodEntry = {
          ...food,
          id: generateId(),
          timestamp: Date.now(),
        };
        const newEntries = [...prev.entries, newEntry];
        const totals = newEntries.reduce(
          (acc, entry) => ({
            calories: acc.calories + entry.calories,
            protein: acc.protein + entry.protein,
            carbs: acc.carbs + entry.carbs,
            fat: acc.fat + entry.fat,
          }),
          { calories: 0, protein: 0, carbs: 0, fat: 0 }
        );
        return { ...prev, entries: newEntries, totals };
      });
    },
    []
  );

  const removeEntry = useCallback((id: string) => {
    setDailyLog((prev) => {
      const newEntries = prev.entries.filter((entry) => entry.id !== id);
      const totals = newEntries.reduce(
        (acc, entry) => ({
          calories: acc.calories + entry.calories,
          protein: acc.protein + entry.protein,
          carbs: acc.carbs + entry.carbs,
          fat: acc.fat + entry.fat,
        }),
        { calories: 0, protein: 0, carbs: 0, fat: 0 }
      );
      return { ...prev, entries: newEntries, totals };
    });
  }, []);

  return { dailyLog, addEntry, removeEntry };
};
