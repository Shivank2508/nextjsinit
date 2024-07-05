import { Metadata } from "next"
type Props = {
    params: {
        productid: string
    }
}
export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Product ${params.productid}`
    }
}
export default function ProductId({ params }: Props) {
    console.log(params)
    return <>
        <h1>Product Details {params.productid}</h1>
    </>
}