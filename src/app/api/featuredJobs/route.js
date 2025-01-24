import { data } from '@/app/api/data.js';

export async function GET(req) {
    if(req.method !== 'GET'){
        return new Response( JSON.stringify({status: 404 , message: 'unauthorized'}),
            { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
    } else {
 
        function getRandomItems(arr, num) {
            const result = [];
            const usedIndices = new Set();
            while(result.length < num && result.length < arr.length) {
                const randomIndex = Math.floor(Math.random() * arr.length);
                 if (!usedIndices.has(randomIndex)) {
                        result.push(arr[randomIndex]);
                        usedIndices.add(randomIndex);
                    }
            }
             return result;
        }

        
        const randomItems = getRandomItems(data, 9);
        return new Response(
            JSON.stringify({ status: 200, data: randomItems }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    }
}


