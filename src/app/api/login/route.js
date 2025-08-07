
import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const uri = process.env.MONGODB_URI;

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const client = new MongoClient(uri);
    await client.connect();
    const db = client.db('neparcade'); // or whatever your DB is named
    const user = await db.collection('users').findOne({ email });

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return new Response(JSON.stringify({ message: 'Incorrect password' }), { status: 401 });
    }

    // return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
  } catch (err) {
    console.error('Login error:', err);
    return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
  }
}
