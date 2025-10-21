const fs = require('fs');
const path = require('path');

const placeholderContent = `import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json(
    { success: false, error: 'API route not available in static export' },
    { status: 501 } // Not Implemented
  );
}

export async function POST() {
  return NextResponse.json(
    { success: false, error: 'API route not available in static export' },
    { status: 501 } // Not Implemented
  );
}`;

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  
  files.forEach(file => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (file === 'route.ts' && stat.size === 0) {
      console.log(`Adding placeholder to: ${fullPath}`);
      fs.writeFileSync(fullPath, placeholderContent);
    }
  });
}

// Start processing from the src/app/api directory
const apiDir = path.join(__dirname, '../src/app/api');
processDirectory(apiDir);

console.log('All empty API route files have been updated.');
