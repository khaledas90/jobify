export async function generateMetadata({ params }) {
    const { jobId } = params;



    const response = await fetch(`http://localhost:3000/api/jobs/${params.id}`);
    const data = await response.json();

    
    
    return {
        title: {
            absolute: data.data?.name || `${jobName.replace(/[%0-9]/g, '').trim()} Jobs`,
        },
    };
}
export default function Layout({ children }) {

    return <>{children}</>;
}