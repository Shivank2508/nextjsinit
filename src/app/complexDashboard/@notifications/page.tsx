import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
    return <>
        <Card>Notification</Card>
        <Link href={"/complexDashboard/archived"}>Archived</Link>
    </>
}