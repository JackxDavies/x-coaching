import React from 'react';

export const FoodEntryRow = ({ entry, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 animate-fadeIn">
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{entry.name}</h4>
        <p className="text-sm text-gray-600">
          {entry.calories} cal • P: {entry.protein}g • C: {entry.carbs}g • F: {entry.fat}g
        </p>
      </div>
      <button
        onClick={() => onDelete(entry.id)}
        className="ml-4 px-3 py-1 text-red-600 hover:bg-red-50 rounded transition-colors duration-200 text-sm font-medium"
      >
        Remove
      </button>
    </div>
  );
};
