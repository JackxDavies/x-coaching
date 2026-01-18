# Calorie Calculator - Professional Fitness Tracking

A fully-functional, professional monochrome calorie tracker built with React, TypeScript, and Tailwind CSS. Features real-time macro tracking, BMR/TDEE calculations, and a sleek, modern UI.

## Features

- **Goal Setup**: Calculate BMR and TDEE based on personal metrics (weight, height, age, gender, activity level)
- **Daily Calorie Tracking**: Real-time progress visualization with circular progress ring
- **Macro Tracking**: Track protein, carbs, and fat with visual progress bars
- **Food Database**: Pre-loaded common foods for quick logging
- **Custom Foods**: Add custom foods with detailed macro information
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Smooth Animations**: Tailwind-powered transitions and animations
- **Professional Monochrome UI**: Clean, modern aesthetic

## Project Structure

```
src/
├── components/
│   ├── AddFoodModal.tsx       # Modal for adding foods
│   ├── CalorieTracker.tsx     # Main tracking interface
│   ├── FoodEntryRow.tsx       # Food entry list item
│   ├── GoalSetup.tsx          # Initial setup screen
│   ├── MacroBar.tsx           # Macro progress visualization
│   ├── ProgressRing.tsx       # Circular progress indicator
│   └── index.ts               # Component exports
├── hooks/
│   ├── useDailyLog.ts         # Daily log state management
│   └── index.ts               # Hook exports
├── types/
│   └── index.ts               # TypeScript type definitions
├── utils/
│   └── calculations.ts        # BMR, TDEE, macro calculations
├── App.tsx                    # Main app component
├── index.tsx                  # React DOM entry point
└── index.css                  # Global styles and animations
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the dev server at http://localhost:5173

### Build

```bash
npm run build
```

Builds the project for production to the `dist` folder.

## Key Components

### GoalSetup
- User enters personal metrics
- Calculates BMR using Harris-Benedict equation
- Selects activity level (Sedentary to Extremely Active)
- Displays calculated TDEE and calorie targets

### CalorieTracker
- Main interface for daily tracking
- Displays consumed vs target calories
- Shows macronutrient breakdown
- Lists logged foods with removal option

### AddFoodModal
- Common foods quick selection
- Custom food entry form
- Full macro information input

### ProgressRing & MacroBar
- Visual progress indicators
- Smooth animations
- Real-time updates

## Calculations

### BMR (Basal Metabolic Rate)
Uses Harris-Benedict equation:
- **Male**: 10 × weight(kg) + 6.25 × height(cm) - 5 × age + 5
- **Female**: 10 × weight(kg) + 6.25 × height(cm) - 5 × age - 161

### TDEE (Total Daily Energy Expenditure)
TDEE = BMR × Activity Level

Activity multipliers:
- Sedentary: 1.2
- Lightly Active: 1.375
- Moderately Active: 1.55
- Very Active: 1.725
- Extremely Active: 1.9

### Macro Defaults
- Protein: 30% of calories (4 cal/g)
- Carbs: 40% of calories (4 cal/g)
- Fat: 30% of calories (9 cal/g)

## Technologies

- **React 18**: UI framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **Vite**: Fast build tool
- **PostCSS**: CSS processing

## Styling & Animations

All animations use Tailwind CSS utilities:
- `animate-fadeIn`: 0.3s fade-in effect
- `animate-slideUp`: 0.3s slide-up effect
- `transition-all duration-500 ease-out`: Smooth transitions

Monochrome color scheme:
- Primary: Gray-900 (#111827)
- Secondary: Gray-700 (#374151)
- Accent: Gray-600 (#4b5563)
- Light backgrounds: Gray-50 (#f9fafb) to Gray-200 (#e5e7eb)

## Future Enhancements

- Local storage persistence
- Historical data tracking
- Nutrition database API integration
- Export/import functionality
- Weight tracking trend
- Meal planning features

## License

MIT
