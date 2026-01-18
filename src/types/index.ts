export interface MacroNutrients {
  protein: number;
  carbs: number;
  fat: number;
}

export interface CalorieGoal {
  bmr: number;
  tdee: number;
  target: number;
}

export interface FoodEntry {
  id: string;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  timestamp: number;
}

export interface DailyLog {
  date: string;
  entries: FoodEntry[];
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}
