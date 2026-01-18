import React, { useState } from 'react';
import { GoalSetup } from './components/GoalSetup';
import { CalorieTracker } from './components/CalorieTracker';
import { useDailyLog } from './hooks/useDailyLog';

interface UserGoal {
  bmr: number;
  tdee: number;
  target: number;
}

export const App: React.FC = () => {
  const [goal, setGoal] = useState<UserGoal | null>(null);
  const { dailyLog, addEntry, removeEntry } = useDailyLog();

  if (!goal) {
    return <GoalSetup onComplete={setGoal} />;
  }

  return (
    <CalorieTracker
      dailyLog={dailyLog}
      calorieTarget={goal.target}
      onAddFood={addEntry}
      onRemoveFood={removeEntry}
    />
  );
};
