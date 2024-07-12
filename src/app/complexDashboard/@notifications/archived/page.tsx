import Card from "@/components/card"
import Link from "next/link"


const Archived = () => {
    return <>
        <Card>
            <div>Archived</div>
            <Link href={"/complexDashboard"}> Default View</Link>
        </Card>

    </>

}

export default Archived