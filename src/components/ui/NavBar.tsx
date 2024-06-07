import React from "react";

type NavBarProps = {
    className?: string,
    children: React.ReactNode,
    href: string
}
export default function NavBar({className, children, href}: NavBarProps) {
    return <a className={`${className} hover:underline hover:underline-offset-4`} href={href}>
        {children}
    </a>
}