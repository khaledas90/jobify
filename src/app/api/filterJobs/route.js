import { data } from '@/app/api/data.js';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const experience = searchParams.get('experience');
    const statusJob = searchParams.get('statusJob');
    const type = searchParams.get('type');

    const filteredJobs = data.filter(job => {
            return (
            (experience === 'all' || !experience || job.experience === experience) &&
            (statusJob === 'all' || !statusJob || job.status === statusJob) &&
            (type === 'all' || !type || job.type === type)
        );
    });

    

    
    if(!filteredJobs) {
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
