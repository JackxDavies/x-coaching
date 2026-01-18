import React, { useState } from 'react';
import { ProgressRing } from './ProgressRing';
import { MacroBar } from './MacroBar';
import { FoodEntryRow } from './FoodEntryRow';
import { AddFoodModal } from './AddFoodModal';
import { getProgressPercentage, calculateMacros } from '../utils/calculations';

export const CalorieTracker = ({
  dailyLog,
  calorieTarget,
  onAddFood,
  onRemoveFood,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const remaining = calorieTarget - dailyLog.totals.calories;
  const progress = getProgressPercentage(dailyLog.totals.calories, calorieTarget);
  const goalMacros = calculateMacros(calorieTarget);

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Header */}
        <div className="text-center border-b border-gray-200 pb-8">
          <h1 className="text-4xl font-bold text-gray-900">Calorie Tracker</h1>
          <p className="text-gray-600 mt-2">{today}</p>
        </div>

        {/* Main Progress */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <ProgressRing
              percentage={progress}
              label={`${remaining > 0 ? remaining : 0} cal remaining`}
              size={200}
            />
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Daily Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Consumed</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {Math.round(dailyLog.totals.calories)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Target</span>
                  <span className="text-2xl font-bold text-gray-900">
                    {Math.round(calorieTarget)}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Remaining</span>
                  <span className={`text-2xl font-bold ${remaining > 0 ? 'text-gray-900' : 'text-red-600'}`}>
                    {Math.round(Math.max(0, remaining))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Macros */}
        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Macronutrients</h3>
          <MacroBar
            label="Protein"
            value={dailyLog.totals.protein}
            goal={goalMacros.protein}
            color="bg-gray-900"
          />
          <MacroBar
            label="Carbohydrates"
            value={dailyLog.totals.carbs}
            goal={goalMacros.carbs}
            color="bg-gray-700"
          />
          <MacroBar
            label="Fat"
            value={dailyLog.totals.fat}
            goal={goalMacros.fat}
            color="bg-gray-600"
          />
        </div>

        {/* Food Entries */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-gray-900">Food Log</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 hover:shadow-md"
            >
              + Add Food
            </button>
          </div>

          {dailyLog.entries.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">No foods logged yet. Add your first meal!</p>
            </div>
          ) : (
            <div className="space-y-2">
              {dailyLog.entries.map((entry) => (
                <FoodEntryRow
                  key={entry.id}
                  entry={entry}
                  onDelete={onRemoveFood}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <AddFoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={onAddFood}
      />
    </div>
  );
};
