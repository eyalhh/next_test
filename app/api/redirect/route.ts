import pool from '@/lib/db'
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { shortCode } = await request.json();

    try {
        const reuslt = await pool.query(
            'SELECT * FROM urls WHERE short_code = $1',
            [shortCode]
        );

        return NextResponse.json({ data: reuslt.rows[0] });
    } catch (error) {
        return NextResponse.json({ error: "db failed" });
    }
}
