type DetailSectionProps = {
    children: React.ReactNode,
    className?: string
}
export default function DetailSection(
    {children, className}: DetailSectionProps
) {
    return <h1 className={`${className} h-[200px] text-xl font-bold`}>
        {children}
    </h1>
}