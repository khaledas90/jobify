import { data } from '@/app/api/data.js';
 

export async function GET(req) {
    if(req.method !== 'GET'){
        return new Response( JSON.stringify({status: 404 , message: 'unauthorized'}),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    } else{

        return new Response(
            JSON.stringify({ status: 200, data: data }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    }
}