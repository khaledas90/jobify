import { data } from '@/app/api/data.js';


export async function GET(request) {
    const { searchParams} = new URL(request.url);
    const Search = searchParams.get('Search');

    const filteredJobs = data.filter(job => job.name.toLowerCase().includes(Search.toLowerCase()) || job.type.toLowerCase().includes(Search.toLowerCase()));

    if (!filteredJobs) {
        return new Response(JSON.stringify({ status: 404, message: 'Job not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({ status: 200, data: filteredJobs }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}