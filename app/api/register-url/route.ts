import pool from '@/lib/db'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const { url } = await request.json();

    try {
        const result = await pool.query(
            'SELECT * FROM urls WHERE original_url = $1',
            [url]
        );

        if ( result.rows[0] == null ) { 
            
        } else {
            return NextResponse.json({ data: result.rows[0] })
        }
    } catch (error) {
        return NextResponse.json({ error: "db failed."})
    }
    

}