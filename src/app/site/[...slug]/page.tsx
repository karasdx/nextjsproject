import { notFound } from "next/navigation";

export default function SiteInfo( { 
    params,
}: {
    params: {
        slug: string[];
    };
} ) {
    if (params.slug?.length === 2){
        return (
            <h1>
                Viewing site {params.slug[1]} of customer {params.slug[0]}
            </h1>
        )
    } else if (params.slug?.length ===1){
        return (
            <h1>
                View sites of customer {params.slug[0]}
            </h1>
        )
    }
    return <h1>sites home page</h1>

}