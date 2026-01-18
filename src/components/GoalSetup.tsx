import React, { useState } from 'react';
import { calculateBMR, calculateTDEE, calculateMacros } from '../utils/calculations';

interface GoalSetupProps {
  onComplete: (goal: { bmr: number; tdee: number; target: number }) => void;
}

export const GoalSetup: React.FC<GoalSetupProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [activityLevel, setActivityLevel] = useState(1.55);
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);

  const handleCalculate = () => {
    const bmrValue = calculateBMR(
      parseFloat(weight),
      parseFloat(height),
      parseFloat(age),
      gender
    );
    setBmr(bmrValue);
    const tdeeValue = calculateTDEE(bmrValue, activityLevel);
    setTdee(tdeeValue);
    setStep(2);
  };

  const handleComplete = () => {
    onComplete({
      bmr,
      tdee,
      target: tdee,
    });
  };

  const activityLevels = [
    { value: 1.2, label: 'Sedentary', desc: 'Little or no exercise' },
    { value: 1.375, label: 'Lightly Active', desc: '1-3 days/week' },
    { value: 1.55, label: 'Moderately Active', desc: '3-5 days/week' },
    { value: 1.725, label: 'Very Active', desc: '6-7 days/week' },
    { value: 1.9, label: 'Extremely Active', desc: 'Intense daily exercise' },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Calorie Calculator</h1>
          <p className="text-gray-600 mt-2">Set up your fitness goals</p>
        </div>

        {step === 1 ? (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="flex gap-4">
                {(['male', 'female'] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
                      gender === g
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter your weight"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Enter your height"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Age (years)
              </label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>

            <button
              onClick={handleCalculate}
              disabled={!weight || !height || !age}
              className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 disabled:bg-gray-400 transition-colors duration-200"
            >
              Calculate BMR
            </button>
          </div>
        ) : (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 mb-2">Basal Metabolic Rate (BMR)</p>
              <p className="text-4xl font-bold text-gray-900 mb-4">{Math.round(bmr)} cal/day</p>

              <div className="space-y-3">
                {activityLevels.map((level) => (
                  <button
                    key={level.value}
                    onClick={() => setActivityLevel(level.value)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      activityLevel === level.value
                        ? 'bg-gray-900 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    <p className="font-medium">{level.label}</p>
                    <p className={`text-sm ${activityLevel === level.value ? 'text-gray-300' : 'text-gray-600'}`}>
                      {level.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 text-white p-6 rounded-lg">
              <p className="text-gray-300 mb-2">Daily Calorie Target (TDEE)</p>
              <p className="text-4xl font-bold mb-4">{Math.round(tdee)} cal/day</p>
              <div className="space-y-2 text-sm text-gray-300">
                <p>• Maintain weight: {Math.round(tdee)} cal</p>
                <p>• Lose weight: {Math.round(tdee - 500)} cal</p>
                <p>• Gain weight: {Math.round(tdee + 500)} cal</p>
              </div>
            </div>

            <button
              onClick={handleComplete}
              className="w-full py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              Start Tracking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
