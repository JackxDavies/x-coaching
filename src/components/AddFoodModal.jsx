import React, { useState } from 'react';
import { FoodEntryRow } from './FoodEntryRow';
import { AddFoodModal } from './AddFoodModal';

const COMMON_FOODS = [
  { name: 'Chicken Breast (100g)', calories: 165, protein: 31, carbs: 0, fat: 4 },
  { name: 'Rice (100g)', calories: 130, protein: 3, carbs: 28, fat: 0 },
  { name: 'Broccoli (100g)', calories: 34, protein: 3, carbs: 7, fat: 0 },
  { name: 'Salmon (100g)', calories: 208, protein: 22, carbs: 0, fat: 13 },
  { name: 'Eggs (1 large)', calories: 78, protein: 6, carbs: 1, fat: 6 },
  { name: 'Oats (100g)', calories: 389, protein: 17, carbs: 66, fat: 7 },
  { name: 'Almonds (28g)', calories: 164, protein: 6, carbs: 6, fat: 14 },
  { name: 'Banana (1 medium)', calories: 105, protein: 1, carbs: 27, fat: 0 },
];

export const AddFoodModal = ({ isOpen, onClose, onAdd }) => {
  const [customName, setCustomName] = useState('');
  const [customCalories, setCustomCalories] = useState('');
  const [customProtein, setCustomProtein] = useState('');
  const [customCarbs, setCustomCarbs] = useState('');
  const [customFat, setCustomFat] = useState('');
  const [useCustom, setUseCustom] = useState(false);

  const handleAddFood = (food) => {
    onAdd(food);
    resetForm();
    onClose();
  };

  const handleAddCustom = () => {
    if (customName && customCalories) {
      handleAddFood({
        name: customName,
        calories: parseInt(customCalories),
        protein: parseInt(customProtein) || 0,
        carbs: parseInt(customCarbs) || 0,
        fat: parseInt(customFat) || 0,
      });
    }
  };

  const resetForm = () => {
    setCustomName('');
    setCustomCalories('');
    setCustomProtein('');
    setCustomCarbs('');
    setCustomFat('');
    setUseCustom(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fadeIn">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto animate-slideUp">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Add Food</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        <div className="p-6 space-y-4">
          {!useCustom ? (
            <>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">Common Foods</p>
                <div className="space-y-2 max-h-80 overflow-y-auto">
                  {COMMON_FOODS.map((food, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAddFood(food)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    >
                      <p className="font-medium text-gray-900">{food.name}</p>
                      <p className="text-xs text-gray-600">
                        {food.calories} cal • P: {food.protein}g • C: {food.carbs}g • F: {food.fat}g
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setUseCustom(true)}
                className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
              >
                Add Custom Food
              </button>
            </>
          ) : (
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Food name"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="number"
                placeholder="Calories"
                value={customCalories}
                onChange={(e) => setCustomCalories(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="number"
                placeholder="Protein (g)"
                value={customProtein}
                onChange={(e) => setCustomProtein(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="number"
                placeholder="Carbs (g)"
                value={customCarbs}
                onChange={(e) => setCustomCarbs(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
              <input
                type="number"
                placeholder="Fat (g)"
                value={customFat}
                onChange={(e) => setCustomFat(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setUseCustom(false)}
                  className="flex-1 py-2 px-4 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={handleAddCustom}
                  className="flex-1 py-2 px-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
