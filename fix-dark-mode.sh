#!/bin/bash

# Fix all dark mode text visibility issues across all pages

for file in app/*/page.tsx app/page.tsx; do
  if [ -f "$file" ]; then
    echo "Processing $file..."
    
    # Fix specific gradient backgrounds
    sed -i '' 's/bg-gradient-to-br from-gray-50 via-white to-gray-50/bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800/g' "$file"
    
    # Fix bg-gray-100
    sed -i '' 's/className="\([^"]*\)bg-gray-100\([^"]*\)"/className="\1bg-gray-100 dark:bg-gray-800\2"/g' "$file"
    
    # Fix standalone bg-white that doesn't have dark mode
    sed -i '' 's/ bg-white"/ bg-white dark:bg-gray-900"/g' "$file"
    sed -i '' 's/ bg-white / bg-white dark:bg-gray-900 /g' "$file"
    
    # Fix any remaining text-gray-XXX without dark variants
    sed -i '' 's/text-gray-500 /text-gray-500 dark:text-gray-400 /g' "$file"
    sed -i '' 's/text-gray-400 /text-gray-400 dark:text-gray-500 /g' "$file"
    
  fi
done

echo "✓ All pages updated with dark mode classes!"
