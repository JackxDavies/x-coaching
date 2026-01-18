import React from 'react';

interface MacroBarProps {
  label: string;
  value: number;
  goal: number;
  color: string;
}

export const MacroBar: React.FC<MacroBarProps> = ({ label, value, goal, color }) => {
  const percentage = Math.min((value / goal) * 100, 100);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-semibold text-gray-900">
          {value}g / {goal}g
        </span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
