export default function PageReview({
    params,
}: {
    params: {
        productId: string;
        reviewId: string;
    };
}) {
    return (
        <>
            <p>
                This is a nested dynamic routing page, where we declare the
                folder as [__name__].
            </p>
            <p>
                This is the product with the productId as {params.productId} and
                reviewId as {params.reviewId}
            </p>
        </>
    );
}
