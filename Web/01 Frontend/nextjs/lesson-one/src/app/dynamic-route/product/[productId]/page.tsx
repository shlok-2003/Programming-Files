export default function ProductDetails({
    params,
}: {
    params: { productId: string };
}) {
    return (
        <>
            <p>
                This is a dynamic routing page, where we declare the folder as [__name__].
            </p>
            <p>
                This is the product with the productId as{' '}
                {params.productId}
            </p>
        </>
    );
}
