import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';

const uri = process.env.MONGODB_URI;

export async function POST(req) {
    try {
        const { email, password } = await req.json();

        const client = new MongoClient(uri);
        await client.connect();
        const db = client.db('neparcade');

        const exists = await db.collection('users').findOne({ email });
        if (exists) {
            return new Response(JSON.stringify({ message: 'User already exists' }), { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.collection('users').insertOne({ email, password: hashedPassword });

        return new Response(JSON.stringify({ message: 'Registered. You can now SignIn.'}), { status: 201 });
    } catch (err) {
        console.error('Signup error:', err);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
}
