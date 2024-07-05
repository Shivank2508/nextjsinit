import { notFound } from "next/navigation"

export default function ReviewCount({ params }: {
    params: { reviewCount: string, productid: string }
}) {
    if (parseInt(params.reviewCount) > 1000) {
        notFound()
    }
    return <>
        <h1>Product {params.productid} Review {params.reviewCount} </h1>
    </>
}