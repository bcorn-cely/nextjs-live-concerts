import { NextRequest, NextResponse } from 'next/server';

// This is a mock user database. In a real application, you'd use a proper database.
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  // Basic input validation
  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password are required' }, { status: 400 });
  }

  // Check if the user exists and the password is correct
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // In a real application, you would create a session or JWT here
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } else {
    // Delay the response to mitigate timing attacks
    await new Promise(resolve => setTimeout(resolve, 1000));
    return NextResponse.json({ error: 'Invalid username or password' }, { status: 401 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}