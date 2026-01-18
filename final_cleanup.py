import os
import pathlib

# List of remaining .ts files to delete
files_to_delete = [
    "/workspaces/x-coaching/src/components/index.ts",
    "/workspaces/x-coaching/src/hooks/index.ts",
    "/workspaces/x-coaching/src/hooks/useDailyLog.ts",
    "/workspaces/x-coaching/src/utils/calculations.ts",
]

for file_path in files_to_delete:
    try:
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"✓ Deleted: {file_path}")
        else:
            print(f"- Already deleted: {file_path}")
    except Exception as e:
        print(f"✗ Error deleting {file_path}: {e}")

print("\nRemaining TypeScript files:")
for root, dirs, files in os.walk("/workspaces/x-coaching/src"):
    for file in files:
        if file.endswith((".ts", ".tsx")):
            full_path = os.path.join(root, file)
            print(f"  {full_path}")

print("\nCleanup script execution complete!")
