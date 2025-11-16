const fs = require('fs');
const path = require('path');

const replacements = [
  // Background colors
  { from: /bg-white(?!\/)/g, to: 'bg-white dark:bg-gray-900' },
  { from: /bg-gray-50(?!\/)/g, to: 'bg-gray-50 dark:bg-gray-800' },
  { from: /bg-gray-100(?!\/)/g, to: 'bg-gray-100 dark:bg-gray-800' },
  
  // Text colors
  { from: /text-gray-900(?![\/\-])/g, to: 'text-gray-900 dark:text-white' },
  { from: /text-gray-600(?![\/\-])/g, to: 'text-gray-600 dark:text-gray-300' },
  { from: /text-gray-700(?![\/\-])/g, to: 'text-gray-700 dark:text-gray-200' },
  { from: /text-gray-800(?![\/\-])/g, to: 'text-gray-800 dark:text-gray-100' },
  
  // Border colors
  { from: /border-gray-200(?![\/\-])/g, to: 'border-gray-200 dark:border-gray-700' },
  { from: /border-gray-300(?![\/\-])/g, to: 'border-gray-300 dark:border-gray-600' },
];

function addDarkMode(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  replacements.forEach(({ from, to }) => {
    const newContent = content.replace(from, to);
    if (newContent !== content) {
      modified = true;
      content = newContent;
    }
  });
  
  if (modified) {
    // Remove duplicates (in case dark: classes already exist)
    content = content.replace(/dark:bg-gray-900 dark:bg-gray-900/g, 'dark:bg-gray-900');
    content = content.replace(/dark:bg-gray-800 dark:bg-gray-800/g, 'dark:bg-gray-800');
    content = content.replace(/dark:text-white dark:text-white/g, 'dark:text-white');
    content = content.replace(/dark:text-gray-300 dark:text-gray-300/g, 'dark:text-gray-300');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated: ${filePath}`);
  }
}

// Get all page.tsx files
const pagesDir = path.join(__dirname, 'app');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file === 'page.tsx') {
      addDarkMode(filePath);
    }
  });
}

processDirectory(pagesDir);
console.log('Dark mode classes added to all pages!');
