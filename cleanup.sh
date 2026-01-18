#!/bin/bash
# Cleanup old TypeScript files

# Delete main TypeScript files
rm -f /workspaces/x-coaching/src/App.tsx
rm -f /workspaces/x-coaching/src/index.tsx

# Delete component TypeScript files
rm -f /workspaces/x-coaching/src/components/*.tsx
rm -f /workspaces/x-coaching/src/components/index.ts

# Delete hook TypeScript files
rm -f /workspaces/x-coaching/src/hooks/*.ts
rm -f /workspaces/x-coaching/src/hooks/index.ts

# Delete types directory
rm -rf /workspaces/x-coaching/src/types

# Delete TypeScript config files
rm -f /workspaces/x-coaching/tsconfig.json
rm -f /workspaces/x-coaching/tsconfig.node.json

echo "Cleanup complete!"
ls -la /workspaces/x-coaching/src/
