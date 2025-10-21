import { NextResponse } from 'next/server';

// This function is required for static export of dynamic routes.
// It tells Next.js that there are no params to generate at build time.
export async function generateStaticParams() {
  return [];
}

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
}