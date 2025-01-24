export async function generateMetadata({ params }) {
    const { jobName } = params;
    return {
        title:{
            absolute:`${jobName.replace(/[%0-9]/g, '').trim()} Jobs`,
        }
    };
}

export default function Layout({ children }) {
    return <>{children}</>;
}