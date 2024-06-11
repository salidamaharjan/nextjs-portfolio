type DetailSectionProps = {
    children: React.ReactNode,
    className?: string,
    id: string
}
export default function DetailSection(
    {children, className, id}: DetailSectionProps
) {
    return <h1 id={id} className={`${className} h-[500px] text-xl font-bold`}>
        {children}
    </h1>
}