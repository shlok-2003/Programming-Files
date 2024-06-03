export default function CatchAllSegment({
    params,
}: {
    params: {
        slug: string[];
    };
}) {
    if (params.slug.length === 2) {
        return (
            <>
                Viewing 2 level routing for {params.slug[0]} and{' '}
                {params.slug[1]}
            </>
        );
    } else if (params.slug.length == 1) {
        return <>Viewing 1 level routing for {params.slug[0]}</>;
    } else {
        return <>Viewing 0 level routing</>;
    }
}
