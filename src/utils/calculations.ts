export const calculateBMR = (
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number => {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

export const calculateTDEE = (bmr: number, activityLevel: number): number => {
  return bmr * activityLevel;
};

export const calculateMacros = (
  calories: number,
  proteinPercent: number = 0.3,
  carbsPercent: number = 0.4,
  fatPercent: number = 0.3
) => {
  return {
    protein: Math.round((calories * proteinPercent) / 4),
    carbs: Math.round((calories * carbsPercent) / 4),
    fat: Math.round((calories * fatPercent) / 9),
  };
};

export const getRemainingCalories = (target: number, consumed: number): number => {
  return target - consumed;
};

export const getProgressPercentage = (consumed: number, target: number): number => {
  return Math.min((consumed / target) * 100, 100);
};
