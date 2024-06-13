type DetailSectionProps = {
    children: React.ReactNode,
    className?: string,
    id: string
}
export default function DetailSection(
    {children, className, id}: DetailSectionProps
) {
    return <h1 id={id} className={`${className} md:text-xl justify-center p-2 text-md font-bold`}>
        {children}
    </h1>
}