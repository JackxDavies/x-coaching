export const calculateBMR = (weight, height, age, gender) => {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

export const calculateTDEE = (bmr, activityLevel) => {
  return bmr * activityLevel;
};

export const calculateMacros = (
  calories,
  proteinPercent = 0.3,
  carbsPercent = 0.4,
  fatPercent = 0.3
) => {
  return {
    protein: Math.round((calories * proteinPercent) / 4),
    carbs: Math.round((calories * carbsPercent) / 4),
    fat: Math.round((calories * fatPercent) / 9),
  };
};

export const getRemainingCalories = (target, consumed) => {
  return target - consumed;
};

export const getProgressPercentage = (consumed, target) => {
  return Math.min((consumed / target) * 100, 100);
};
