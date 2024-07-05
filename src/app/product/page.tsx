import Link from "next/link"

export default function Product() {
    return <>
        <h1>Product Details</h1>
        <Link href="/">Home</Link>
        <h1>
            <Link href={"product/1"}>Product 1</Link>
        </h1>
        <h1>
            <Link href={"product/2"} >Product 2</Link>
        </h1>
        <h1>
            <Link href={"product/3"} replace>Product 3</Link>
        </h1>
    </>
}