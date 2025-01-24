import { data } from '@/app/api/data.js';
import { NextResponse } from 'next/server'; 
export async function GET(req, { params }) {
    const jobId = parseInt(params.id, 10);

    if (isNaN(jobId) || jobId > data.length) {
        return NextResponse.redirect('/jobs');
    }

    
    
    const job = data.find((job) => job.id === jobId);

    if (!job) {
        return new Response(
            JSON.stringify({ status: 404, message: 'Job not found' }),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    }

    return new Response(
        JSON.stringify({ status: 200, data: job }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
}
