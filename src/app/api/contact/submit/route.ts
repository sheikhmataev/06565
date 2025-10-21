import { NextResponse } from 'next/server';

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