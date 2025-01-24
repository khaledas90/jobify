export async function GET(req) {
  if (req.method !== 'GET') {
    return new Response(
      JSON.stringify({ status: 404, message: 'unauthorized' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  } else {
    const jobCategory = [
      { id: 1, name: 'Programming', description: 'Many jobs available' ,img :"https://i.postimg.cc/Fsmn5DxG/devoloper.jpg" },
      { id: 2, name: 'Automotive Jobs', description: 'Many jobs available' ,img:"https://i.postimg.cc/52ygbGQ5/automotive-jop.png" },
      { id: 3, name: 'Health and Care', description: 'Many jobs available' , img:"https://i.postimg.cc/T1j75DTr/health-and-care.jpg" },
      { id: 4, name: 'Marketing', description: 'Many jobs available' ,img:"https://i.postimg.cc/jdX3sPgT/marketing.jpg" },
      { id: 5, name: 'Project Management', description: 'Many jobs available', img: "https://i.postimg.cc/RCwbDjwN/project-manegment.jpg" },
      { id: 6, name: 'Customer Services', description: 'Many jobs available' ,img :"https://i.postimg.cc/7ZKRN009/customer-seervises.jpg" },
    ];

    return new Response(
      JSON.stringify({ status: 200, data: jobCategory }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
