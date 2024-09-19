import { ReactNode } from "react";
import { unstable_generatePermutations as generatePermuations } from "@vercel/flags/next";
import { artistProfilePageFlags } from "@/lib/flags";

export async function generateStaticParams() {
    const ids = await generatePermuations(artistProfilePageFlags);
    return ids.map((val) => ({code: val }));
}

export default function Layout({children} : {children: ReactNode}) {
    return children;
}