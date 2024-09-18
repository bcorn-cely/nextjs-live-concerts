import { ReactNode } from "react";

export async function generateStaticParams() {
    return [];
}

export async function Layout({children}: { children: ReactNode }) {
    return children;
}