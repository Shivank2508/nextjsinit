

export default function ComplexDashboardLayout({
    children,
    users,
    revenue,
    notifications
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode

}) {

    return <>
        <h1>shivank</h1>
        <div className="bg-success">{children}</div>
        <div className="bg-warning">{users}</div>
        <div className="bg-danger">{revenue}</div>
        <div className="bg-secondary">{notifications}</div>
    </>
}