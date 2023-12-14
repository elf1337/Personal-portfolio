import { MongoClient } from 'mongodb';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {

    const dbConnection: any = process.env.DB_HOST;
    const dbName = 'contactData';
    const dbCollection = 'Contacts';

    try {

        const formData = await req.json()

        const client = await MongoClient.connect(dbConnection);
        const db = client.db(dbName);
        const collection = db.collection(dbCollection);

        await collection.insertOne(formData)
        client.close

        return NextResponse.json({ message: " We received your message! We will get back to you soon." });
    } catch (error) {
        console.error('Error handling POST request:', error);
        return NextResponse.json({ message: ' Error occurred while submitting the message. Please try after sometime' });
    }
}
