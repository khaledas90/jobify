import { data } from '@/app/api/data.js';

export async function GET(request) {
    const {searchParams } = new URL(request.url);
    const jobName = searchParams.get('jobName');
    const job = data.filter(job => job.type === jobName);

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
