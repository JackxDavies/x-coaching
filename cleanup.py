import os
import shutil

files_to_delete = [
    "/workspaces/x-coaching/src/App.tsx",
    "/workspaces/x-coaching/src/index.tsx",
    "/workspaces/x-coaching/src/components/AddFoodModal.tsx",
    "/workspaces/x-coaching/src/components/CalorieTracker.tsx",
    "/workspaces/x-coaching/src/components/FoodEntryRow.tsx",
    "/workspaces/x-coaching/src/components/GoalSetup.tsx",
    "/workspaces/x-coaching/src/components/MacroBar.tsx",
    "/workspaces/x-coaching/src/components/ProgressRing.tsx",
    "/workspaces/x-coaching/src/components/index.ts",
    "/workspaces/x-coaching/src/hooks/useDailyLog.ts",
    "/workspaces/x-coaching/src/hooks/index.ts",
    "/workspaces/x-coaching/src/utils/calculations.ts",
    "/workspaces/x-coaching/tsconfig.json",
    "/workspaces/x-coaching/tsconfig.node.json",
    "/workspaces/x-coaching/ReadMe.tsx",
    "/workspaces/x-coaching/cleanup.sh",
]

dirs_to_delete = [
    "/workspaces/x-coaching/src/types",
]

# Delete files
for file in files_to_delete:
    try:
        if os.path.exists(file):
            os.remove(file)
            print(f"Deleted: {file}")
    except Exception as e:
        print(f"Error deleting {file}: {e}")

# Delete directories
for dir_path in dirs_to_delete:
    try:
        if os.path.exists(dir_path):
            shutil.rmtree(dir_path)
            print(f"Deleted directory: {dir_path}")
    except Exception as e:
        print(f"Error deleting {dir_path}: {e}")

print("Cleanup complete!")
