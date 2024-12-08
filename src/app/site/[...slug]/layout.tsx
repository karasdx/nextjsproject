export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <h2>Site Layout</h2>
        </>
    )
}