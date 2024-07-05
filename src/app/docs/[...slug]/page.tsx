export default function Document({ params }: { params: { slug: string[] } }) {
    console.log(params)
    return <>
        <div>
            veiew features {params?.slug[0]} and {params?.slug[1]}
        </div>
    </>
}